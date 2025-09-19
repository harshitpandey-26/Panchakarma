import "./QuizSummary.scss";
import ayurveda_constitution from "../../assets/icons/ayurveda_constitution_icon_2.png";
import dosha_icon from "../../assets/icons/dosha_icon_2.png";
import heart from "../../assets/icons/characteristics_icon_2.png";
import ai from "../../assets/icons/ai_summary_icon_2.png";

const QuizSummary = () => {
  return (
    <section className="quiz_summary_container">
      <div className="heading">
        <div className="p-1">
          <img src={ayurveda_constitution} alt="ayurveda constitution" />
          <h2>Your Ayurvedic Constitution</h2>
        </div>
        <p>Personalized insights powered by AI and ancient wisdom</p>
      </div>

      <div className="summary_container">
        <div className="left">
          <div className="dosha-analysis">
            <div className="dosha_icon">
              <img src={dosha_icon} alt="dosha icon" />
              <h3>Dosha Analysis</h3>
            </div>
            <div className="option-list">
              <div className="dosha-analysis-result">
                <div className="elements">
                  <p>Vata</p>
                  <p>70%</p>
                </div>
                <div className="progress-bar"></div>
              </div>
              <div className="dosha-analysis-result">
                <div className="elements">
                  <p>Pitta</p>
                  <p>20%</p>
                </div>
                <div className="progress-bar"></div>
              </div>
              <div className="dosha-analysis-result">
                <div className="elements">
                  <p>Kapha</p>
                  <p>30%</p>
                </div>
                <div className="progress-bar"></div>
              </div>
            </div>
            <div className="bottom">
              <p id="para">Primary Constitution: Vata Constitution</p>
              <p>
                Air and Space elements.You are creative, energetic and
                adaptable.
              </p>
            </div>
          </div>

          <div className="pat-characteristics">
            <div className="pat_icon">
              <img src={heart} alt="heart" />
              <h3>Your Characteristics</h3>
            </div>
            <div className="pat-content">
              <div className="content">
                <ul>Natural Traits</ul>
                <li>Quick Thinking</li>
                <li>Creative</li>
                <li>Energetic</li>
                <li>Variable appetite</li>
              </div>
              <div className="content">
                <ul>Recommendations</ul>
                <li>Regular Routine</li>
                <li>Warm foods</li>
                <li>Oil massage</li>
                <li>Calming practices</li>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-summary">
          <div className="ai_icon">
            <img src={ai} alt="ai" />
            <h3>AI Generated Summary</h3>
          </div>
          <div className="ai-btn">
            <a>Proceed to Health Information</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSummary;
