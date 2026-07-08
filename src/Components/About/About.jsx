import React from 'react'
import './About.css'
import about_img from  '../../assets/about_img.png'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about_img' />
            <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's leaders Today</h2>
            <p>University is an education establishment in which students of any age can apply to and attend. It’s a further line of study from that of A-Levels, BTECS and other college qualifications. Essentially, students study a specific degree course so, unlike A-Levels, BTECs or GCSEs where students may have previously studied multiple subjects, at university you tend to narrow this down to just one or two subject areas, for example, Geography or Mathematics with Economics. </p>
            <p>Many organisations and businesses look for employees to have obtained a University degree. In most cases, the subject you study at university doesn’t necessarily connect or direct you to your future career. For example, I study Sport and Exercise Science and did my placement in Marketing! </p>
            <p>However, there are some future careers such as Veterinary Science, Medicine or Engineering that may require you to have an undergraduate degree in a specific degree subject, so if you have a future career in mind it is worth researching to see if a degree is necessary for that job. </p>
        </div>

    </div>
  )
}


export default About;