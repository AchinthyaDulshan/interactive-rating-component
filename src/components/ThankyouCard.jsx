import React from 'react'
import TopImage from '../assets/images/illustration-thank-you.svg'

const ThankyouCard = ({rating}) => {
    return (
        <div>
            <div className='sm:mx-auto bg-Dark-Blue p-8 rounded-2xl max-w-96 text-center mx-5 thanksCard'>
                <img className='mx-auto' src={TopImage} alt="" />
            <p className='text-Orange mt-8 rounded-full bg-gray-700/45 w-fit mx-auto px-4 py-1 '>You selected {rating} out of 5</p>
            <h1 className='text-3xl text-White font-bold pt-8 pb-5'>Thank you!</h1>
            <p className='text-sm text-Light-Grey'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
        </div>
    )
}

export default ThankyouCard