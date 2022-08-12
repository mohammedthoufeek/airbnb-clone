import React from 'react'
import katie from '../images/katie-zaferes.jpg'
import Star from '../images/star-icon.png'

const card = () => {
  return (
    <div className='card'>
        <img src={katie} alt='Katie-runner' className='card--image'/>
        <div className='card--stats'>
            <img src={Star} alt='rating' className='card--star'/>
            <span>5.0</span>
            <span className='gray'>(6) •</span>
            <span className='gray'>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
    </div>
  )
}

export default card