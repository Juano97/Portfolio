import logo from '../../assets/images/LogoJFit.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">

            <div className="text-zone">
                <h1><p>Hi,</p><p>I'm
                <img src={logo} alt="developer" ></img>
                uan C. Vázquez</p>
                <p>Computer Scientist</p>
                </h1> 
                <h2>I'm a Full Stack Web Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home