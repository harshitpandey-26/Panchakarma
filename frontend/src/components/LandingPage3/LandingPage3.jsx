import React from "react";
import "./LandingPage3.scss";
import tick from "../../assets/icons/tick_bullets_2.png";
import logo from "../../assets/icons/white_logo_2.png";
import star from "../../assets/icons/stars_2.png";
import moneyPlant from '../../assets/images/money_plant_2.png';

const LandingPage3 = () => {
  return (
    <section className="landing_3_container">
      <div className="landing_3_container-1">
        <div className="part-1">
          <h1>Your Path to Wellness, Simplified</h1>
          <p>
            AyurSutra bridges the gap between traditional Ayurvedic practices
            and modern healthcare needs, providing a seamless experience from
            assessment to healing
          </p>
        </div>
        <div className="part-2">
          <div className="task">
            <img src={tick} alt="tick" />
            <p>Personalized dosha assessment with dynamic questionnaire</p>
          </div>
          <div className="task">
            <img src={tick} alt="tick" />
            <p>
              AI-generated therapy plans based on ancient Ayurvedic principles
            </p>
          </div>
          <div className="task">
            <img src={tick} alt="tick" />
            <p>Real-time progress tracking and wellness monitoring</p>
          </div>
          <div className="task">
            <img src={tick} alt="tick" />
            <p>Direct communication with qualified practitioners</p>
          </div>
          <div className="task">
            <img src={tick} alt="tick" />
            <p>Seamless scheduling and appointment management</p>
          </div>
        </div>
        <div className="part-3">
          <div className="part-3-btn">
            <p>Begin Assessment</p>
          </div>
        </div>
      </div>
      <div className="landing_3_container-2">
        <div className="img-cir">
          <img src={logo} alt="logo" />
        </div>
        <h2>Trusted by Thousands</h2>
        <div className="review">
          <img src={star} alt="star" />
          <p>4.5/5</p>
        </div>
        <div className="para">
          <p id="p1">
            "AyurSutra transformed my approach <br/>to wellness. The personalized
            treatment plan was exactly what I needed for my healing journey."
          </p>
          <p className="p2">- Priya Sharma, Mumbai</p>
        </div>
        <img id="money-plant" src={moneyPlant} alt="money plant" />
      </div>
    </section>
  );
};

export default LandingPage3;
