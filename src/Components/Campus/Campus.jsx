import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery_1.png'
import gallery_2 from '../../assets/gallery_2.png'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_4 from '../../assets/gallery_4.png'
import dark_arrow from '../../assets/dark_arrow.png'




const Campus = () => {
  return (
    <div className='Campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn primary'>See more here<img src={dark_arrow} alt="" /></button>
        
    </div>
  )
}

export default Campus;
