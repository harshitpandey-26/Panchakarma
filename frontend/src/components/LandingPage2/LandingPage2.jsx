import "./LandingPage2.scss";
import brain from '../../assets/icons/icon_brain_2.png';
import heart from '../../assets/icons/icon_heart_2.png';
import people from '../../assets/icons/icon_people_2.png';
import shield from '../../assets/icons/icon_shield.png';


const LandingPage2 = () => {
  return (
    <section className="landing_2_container">
      <div className="landing_2_container-1">
        <div className="text-container">
          <h2>Why Choose AyurSutra?</h2>
          <p>
            Combining ancient Ayurvedic wisdom with modern technology for
            personalized healing
          </p>
        </div>
      </div>
      <div className="landing_2_container-2">
        <div className="card-1">
          <div className="card-1-img">
            <img src={brain} alt="" />
          </div>
          <h3>AI-Powered Dosha Analysis</h3>
          <p>
            Advanced machine learning algorithms analyze your constitution and
            create personalized Panchakarma plans.
          </p>
        </div>
        <div className="card-1">
          <div className="card-1-img">
            <img src={heart} alt="" />
          </div>
          <h3>AI-Powered Dosha Analysis</h3>
          <p>
            Advanced machine learning algorithms analyze your constitution and
            create personalized Panchakarma plans.
          </p>
        </div>
        <div className="card-1">
          <div className="card-1-img">
            <img src={people} alt="" />
          </div>
          <h3>AI-Powered Dosha Analysis</h3>
          <p>
            Advanced machine learning algorithms analyze your constitution and
            create personalized Panchakarma plans.
          </p>
        </div>
        <div className="card-1">
          <div className="card-1-img">
            <img src={shield} alt="" />
          </div>
          <h3>AI-Powered Dosha Analysis</h3>
          <p>
            Advanced machine learning algorithms analyze your constitution and
            create personalized Panchakarma plans.
          </p>
        </div>
      </div>

      <div className="ran-cir"></div>
    </section>
  );
};

export default LandingPage2;
