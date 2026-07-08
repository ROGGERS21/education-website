import React from 'react'
import './Title.css'

const Title = ({subTitle, Title}) => {
  return (
    <div className="Title">
        {/* <p>Our Programs</p> */}
        {/* <h2>What We Offer</h2> */}
        <p>{subTitle}</p>
        <h2>{Title}</h2>
        </div>
  )
}


export default Title;
