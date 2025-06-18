import './about.css'

import sideImage from "../../assets/about/SideImage.png"
import person1 from "../../assets/about/image 46.png"
import person2 from "../../assets/about/image 47.png"
import person3 from "../../assets/about/image 51.png"
import FullServices from '../../components/full_services/FullServices'
import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci'
import Services from '../../components/hero/my_service/Services'
const About = () => {
  return (
    <div className="about section">
        <div className="aboutContents">
            <div className="topBar">
                <div className="left">
                    <span>Home / </span><span>About</span>
                </div>
            </div>

            <div className="ourStory">
                <div className="story">
                    <h2>Our Story</h2>
                    <span>
                        Launched in 2015, Exclusive is South Asia’s premier online shopping 
                        market place with an active presencee in Bangladesh. Supported 
                        by wide range of tailored marketing, data and service solutions, 
                        Exclusive has 10,500 sallers and 300 brands and serves 3 
                        million customers across the region. 
                    </span>
                    <span>
                        Exclusive has more than 1 Million products to offer, growing at a 
                        very fast. Exclusive offers a diverse assotment in categories 
                        ranging  from consumer.
                    </span>
                </div>
                <div className="image">
                    <img src={sideImage} alt="" />
                </div>
            </div>

            <FullServices />

            <div className="team">
                <div className="teamMember">
                    <div className="teamImage">
                        <img src={person1} alt="" />
                    </div>
                    <div className="teamDesc">
                        <h3>Tom Cruise</h3>
                        <span>Founder & Chairman</span>
                        <div className="socials">
                            <CiTwitter className='icon' size={20} />
                            <CiInstagram className='icon' size={20} />
                            <CiLinkedin className='icon' size={20} />
                        </div>
                    </div>
                </div>
                <div className="teamMember">
                    <div className="teamImage">
                        <img src={person3} alt="" />
                    </div>
                    <div className="teamDesc">
                        <h3>Emma Watson</h3>
                        <span>Managing Director</span>
                        <div className="socials">
                            <CiTwitter className='icon' size={20} />
                            <CiInstagram className='icon' size={20} />
                            <CiLinkedin className='icon' size={20} />
                        </div>
                    </div>
                </div>
                <div className="teamMember">
                    <div className="teamImage">
                        <img src={person2} alt="" />
                    </div>
                    <div className="teamDesc">
                        <h3>Will Smith</h3>
                        <span>Product Designer</span>
                        <div className="socials">
                            <CiTwitter className='icon' size={20} />
                            <CiInstagram className='icon' size={20} />
                            <CiLinkedin className='icon' size={20} />
                        </div>
                    </div>
                </div>
            </div>

            <Services />
            
        </div>
    </div>
  )
}

export default About