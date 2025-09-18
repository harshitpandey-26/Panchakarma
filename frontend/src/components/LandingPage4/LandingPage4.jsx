import "./LandingPage4.scss";
import logo from "../../assets/icons/white_logo_2.png";
import aukhal from '../../assets/images/aukhal_image_2.png';
const LandingPage4 = () => {
  return (
    <section className="landing_4_container">
      <div className="left-part">
        <div className="logo-img">
          <img src={logo} alt="logo" />
          <p>AyurSutra</p>
        </div>
        <div className="content">
          <h2>Ready to Start Your Healing Journey?</h2>
          <p>
            Join thousands of others who have transformed their health with
            personalized Panchakarma therapy.
          </p>
          <div className="btn-content">
            <a>Get Started Today</a>
          </div>
        </div>
        <p className="para">
          © 2025 AyurSutra. Bridging ancient wisdom with modern care
        </p>
      </div>
      <div className="right-part">
      </div>
    </section>
  );
};

export default LandingPage4;
