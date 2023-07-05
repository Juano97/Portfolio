import logo from '../../assets/images/LogoJFit.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">

            <div className="text-zone">
                <h1><p>Hi,</p><span>I'm
                <img src={logo} alt="developer" ></img>
                uan C. Vázquez</span>
                <span></span><span></span>
                </h1>
                <h2>Computer Scientist</h2> 
                <h2>Full Stack Web Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home