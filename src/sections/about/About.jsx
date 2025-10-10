import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Creating digital projects people enjoy using has always been my passion.
                As a Computer Engineering student and Front-End Developer from Guadalajara, I’ve spent the past few years designing and building modern, responsive websites that bring ideas to life.
                </p>
                <p>
                Hi, my name is Juan Pablo González Sanmiguel from Guadalajara, Mexico. I’m a Front-End Web Developer currently pursuing my degree in Computer Engineering at the University of Guadalajara. My main goal is to craft clean, user-friendly, and visually appealing websites that deliver real impact. Let’s collaborate on your next project and build something amazing together! Check out my resume below!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About