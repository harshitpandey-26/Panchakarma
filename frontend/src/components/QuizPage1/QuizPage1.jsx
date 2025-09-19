import "./QuizPage1.scss";


const QuizPage1 = () => {
  return (
    <setion className="quiz_1_container">
        <div className="heading">
            <img src="" alt="" />
            <h2>Dosha Assessment</h2>
        </div>
        <p>Discover your unique constitution through ancient Ayurvedic wisdom</p>
        <div className="ques-no">
            <p>Question 1-5</p>
            <p>50% Complete</p>
        </div>
        <div className="disclaimer">
            <img src="" alt="" />
            <p>This quiz consists of two sections. Your responses in Section 1 will dynamically determine the set of five questions presented in Section 2. Please review and answer carefully, as your selections directly influence the subsequent questions.</p>
        </div>

        <div className="questions">
            <div className="ques-part-1">
                <div>
                    physical
                </div>
                #1
            </div>
            <h2>How would you describe your body frame?</h2>
            <div className="options">Thin,Lean build</div>
            <div>Medium,Athletic build</div>
            <div>Large,Solid build</div>
        </div>
    </setion>
  )
}

export default QuizPage1;