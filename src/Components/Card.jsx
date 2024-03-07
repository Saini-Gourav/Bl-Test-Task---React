import React from 'react'
import CardGraph from './Graph/CardGraph'
import Deceased from './Graph/Deceased'
import Recover from './Graph/Recover'

const Card = () => {
  return (
    <>
      <div className='card-container'>
        <div className='card'>
            <CardGraph />
        </div>
        <div className='card'>
            <Deceased />
        </div>
        <div className='card'>
            <Recover />
        </div>

      </div>
    </>
  )
}

export default Card
