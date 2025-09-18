import logo from '../../assets/icons/logo.png';
import './HomePage.scss';
const HomePage = () => {
  return (
    <section className='home'>

        <nav className='nav-container'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav-content'>
                <a href="">About</a>
                <a href="">Therapies</a>
                <a href="">Login</a>
                <button>Get Started</button>
            </div>
        </nav>

        <div></div>

        <div>

        </div>

    </section>
  )
}

export default HomePage