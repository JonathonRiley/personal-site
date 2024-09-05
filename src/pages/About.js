import {Link} from "react-router-dom";

import '../styles/About.css'

const About = () => {
    return (
        <div className="about-content">
            <div className="content">
                <p>
                    In 2009, I moved to the UK to undertake a BSc degree in Maths and Physics at the 
                    <Link to="/education"> University of St Andrews</Link>.
                    After my undergraduate degree, I went on to do a PhD in Condensed Matter Physics 
                    working with Dr. Phil King studying novel electronic in next-generation semiconductor materials.
                    During my PhD I fell in love with programming, machine learning and user applications. 
                </p>
                <p>
                    Working mainly with <Link to="/work">small early start-ups</Link>, I've worked as a data scientist and software engineer in e-commerce, travel, and insurance.
                    More recently, I've been working in asset management, leading a team of engineers building out an automated trading strategy
                    at one of London's largest hedge funds.
                </p>
                <p>
                    Outside of work, I enjoy spending time with my family, cycling, hiking and reading. If you're interested in what
                    I'm currently reading, <Link to="/reading">have a look</Link>.
                </p>
            </div>
        </div>
        
    )
  };
  
  export default About;