import { v4 as uuidv4 } from "uuid";
import { determineDominantDosha } from "../utils/helper/doshaUtils.js";
import repository from "../repositories/index.js";

import {
  AppError,
  DatabaseError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from "../utils/error/app-error.js";

const questionRepo = new repository.QuestionRepository();
const questionOptionRepo = new repository.QuestionOptionRepository();
const userSessionRepo = new repository.UserSessionRepository();
const userAnswerRepo = new repository.UserAnswerRepository();

export const startQuizSession = async () => {
  console.log("inside start quiz service");
  const session_id = uuidv4();

  // Create a new user session
  const userSession = await userSessionRepo.create({
    session_id,
    vata_total: 0,
    pitta_total: 0,
    kapha_total: 0,
    is_complete: false,
  });

  // Get all questions with options
  const questions = await questionRepo.findAllQuestionsWithOptions();

  return { session_id, questions };
};

export const processQuizAnswers = async (session_id, answers) => {
  console.log("inside process quiz answers service");

  // Find the user session
  const userSession = await userSessionRepo.findBySessionId(session_id);
  if (!userSession) {
    throw new NotFoundError("Session not found");
  }

  if (userSession.is_complete) {
    throw new NotFoundError("Quiz already completed");
  }

  let vataTotal = 0;
  let pittaTotal = 0;
  let kaphaTotal = 0;

  // Process each answer
  for (const answer of answers) {
    const { question_id, option_id } = answer;

    // Get the selected option with scores
    const selectedOption = await questionOptionRepo.findOptionByIdAndQuestionId(
      option_id,
      question_id
    );

    if (!selectedOption) {
      throw new NotFoundError(`Option not found for question ${question_id}`);
    }

    // Add to totals
    vataTotal += selectedOption.vata_score;
    pittaTotal += selectedOption.pitta_score;
    kaphaTotal += selectedOption.kapha_score;

    // Save the answer
    await userAnswerRepo.createUserAnswer({
      session_id,
      question_id,
      option_id,
    });
  }

  // Update user session with totals and mark as complete
  await userSessionRepo.updateBySessionId(session_id, {
    vata_total: vataTotal,
    pitta_total: pittaTotal,
    kapha_total: kaphaTotal,
    is_complete: true,
  });

  // Determine dominant dosha
  const dominantDosha = determineDominantDosha(
    vataTotal,
    pittaTotal,
    kaphaTotal
  );

  return {
    vata: vataTotal,
    pitta: pittaTotal,
    kapha: kaphaTotal,
    dominant: dominantDosha,
  };
};

export const getQuizResults = async (session_id) => {
  console.log("inside get quiz results service");

  const userSession = await userSessionRepo.findBySessionId(session_id);
  if (!userSession) {
    throw new NotFoundError("Session not found");
  }

  if (!userSession.is_complete) {
    throw new AppError(
      "Quiz not completed yet",
      401,
      "COMPLETE THE QUIZ",
      "warn"
    );
  }

  // Determine dominant dosha
  const { vata_total, pitta_total, kapha_total } = userSession;
  const dominantDosha = determineDominantDosha(
    vata_total,
    pitta_total,
    kapha_total
  );

  return {
    vata: vata_total,
    pitta: pitta_total,
    kapha: kapha_total,
    dominant: dominantDosha,
  };
};
