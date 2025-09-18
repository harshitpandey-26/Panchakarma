import "./Hero.scss";
import leaf from "../../assets/images/leaf_main.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container-1">
        <div className="hero-content-1">
          <h1>
            Transform Your <br /> Health With <br /> Ayursutra !
          </h1>
        </div>
        <div className="hero-content-2">
          <p>
            Experience the power of AI-guided Panchakarma therapy. Get
            personalized treatment plans, connect with certified practitioners,
            and embark on your journey to optimal wellness.
          </p>
        </div>
        <div className="hero-content-3">
          <div className="hero-content-3-1">
            <div id="btn-cir"></div>
            <a>START YOUR JOURNEY</a>
          </div>
          <button>Learn More</button>
        </div>
      </div>

      <div className="container-2">
        <img src={leaf} alt="leaf"/>
      </div>

      <div className="ran-dot-1" ></div>
      <div className="ran-dot-2" ></div>
      <div className="ran-dot-3" ></div>

      <div className="ran-cir-1"></div>
      <div className="ran-cir-2"></div>

      <div className="hero-line"></div>

    </section>
  );
}

export default Hero;
