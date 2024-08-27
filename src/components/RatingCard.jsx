import React, { useState } from 'react'
import IconStar from '../assets/images/icon-star.svg'
import ThankyouCard from './ThankyouCard';

const RatingCard = () => {

    const [rating, setRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState('');

    const ratingList = [{
        'id': 'one',
        'value': 1
    }, {
        'id': 'two',
        'value': 2
    }, {
        'id': 'three',
        'value': 3
    }, {
        'id': 'four',
        'value': 4
    }, {
        'id': 'five',
        'value': 5
    },]

    const handleSubmit = ()=>{
        if (rating !== 0) {
            setIsSubmitted(true)
        }
    }

    return (
        <>
        {isSubmitted ? (<ThankyouCard rating={rating}/>) : (<div className='sm:mx-auto bg-Dark-Blue p-6 rounded-2xl max-w-96 mx-5'>
            <div className='w-10 h-10 flex justify-center items-center bg-gray-700/45 rounded-full'>
                <img src={IconStar} alt="" />
            </div>
            <h1 className='text-3xl text-White font-bold pt-8 pb-5'>How did we do?</h1>
            <p className='text-sm text-Light-Grey'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='flex justify-around pb-10'>
                {ratingList.map((ratingObj, index) => (
                    <div key={index}>
                        <input className='opacity-0 peer' type="radio" name="rating" id={ratingObj.id} value={ratingObj.value} onClick={(e) => setRating(parseInt(e.target.value))} />
                        <div className='peer-checked:text-Dark-Blue peer-checked:bg-White hover:bg-Orange hover:text-Dark-Blue w-12 h-12 bg-gray-700/45 text-Light-Grey rounded-full'>
                            <label className='w-full h-full flex justify-center items-center font-bold' htmlFor={ratingObj.id}>{ratingObj.value}</label>
                        </div>
                    </div>
                ))}
            </div>
            <button className='uppercase bg-Orange rounded-full w-full py-3 font-bold tracking-widest text-md hover:bg-white' onClick={handleSubmit}>Submit</button>
        </div>)}
        </>
        
    )
}

export default RatingCard