import logo from '../../assets/icons/logo.png';
import Hero from '../../components/Hero/Hero';
import LandingPage2 from '../../components/LandingPage2/LandingPage2';
import LandingPage3 from '../../components/LandingPage3/LandingPage3';
import LandingPage4 from '../../components/LandingPage4/LandingPage4';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.scss';
const HomePage = () => {
  return (
    <section className='home'>
    <Navbar/>
    <Hero/>
    <LandingPage2/>
    <LandingPage3/>
    <LandingPage4/>

    </section>
  )
}

export default HomePage