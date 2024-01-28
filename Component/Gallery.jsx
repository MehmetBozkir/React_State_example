import React from 'react'
import { useState } from 'react'
import { sculptureList } from './data'

function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }
    function handleBeforeClicj(){
        setIndex(index - 1);
    }
    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
  return (
    <div className='Box1'>
            <h2>
                <i>
                    {sculpture.name} by {sculpture.artist}
                </i>
            </h2>
            <button className='mybutton' onClick={handleBeforeClicj}>Before</button>
            <button className='mybutton' onClick={handleNextClick}>Next</button>
            <h3>
                ({index +1 } of {sculptureList.length})
            </h3>
                <button className='mybutton' onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Show'} Details
                    </button>
            {showMore && <p>{sculpture.description}</p>}

            <br/>

            <img 
            src={sculpture.url}
            alt={sculpture.alt}
            ></img>


    </div>
  )
}

export default Gallery