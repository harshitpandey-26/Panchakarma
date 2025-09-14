import { StatusCodes } from "http-status-codes";
import config from "../config/index.js";
import { quizService } from "../services/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/common/success-response.js";

// Start a new quiz session
export const startQuiz = asyncHandler(async (req, res) => {
    console.log("inside startquiz controller");
  const { session_id, questions } = await quizService.startQuizSession();
  console.log(session_id,questions);

  config.logger.info("quiz started successfully", session_id);

  return successResponse(
    res,
    StatusCodes.CREATED,
    "Quiz started successfully",
    {session_id, questions}
  );
});

// Submit all answers and get results
export const submitQuiz = async (req, res) => {
    console.log("inside submit quiz controller");

  const { session_id, answers } = req.body;

  const results = await quizService.processQuizAnswers(session_id, answers);

  return successResponse(
    res,
    StatusCodes.OK,
    "Quiz submitted successfully",
    results
  );
};

// Get quiz results for a session
export const getResults = async (req, res) => {
    console.log("inside get results controller");

  const { session_id } = req.params;

  const results = await quizService.getQuizResults(session_id);

  return successResponse(res, StatusCodes.OK, "Result of the quiz", results);
};
