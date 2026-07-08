import React from 'react'
import './Programs.css'
import Program_1 from '../../assets/Program_1.png' 
import Program_2 from '../../assets/Program_2.png'
import Program_3 from '../../assets/Program_3.png' 
import program_icon_3 from '../../assets/program_icon_3.jpg'
import program_icon_2 from '../../assets/program_icon_2.jpg'
import program_icon_1 from '../../assets/program_icon_1.jpg'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={Program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
         <div className="program">
            <img src={Program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
         <div className="program">
            <img src={Program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}


export default Programs;
