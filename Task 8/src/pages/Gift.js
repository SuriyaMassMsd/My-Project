import React from 'react'
import Gifts from '../videos/gift.mp4'

const Gift = () => {
  return (
    <div >
      <video className='gift-video' src={Gifts} autoPlay muted loop/>
    </div>
  )

}

export default Gift