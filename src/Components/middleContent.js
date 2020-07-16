import React from 'react'


const MiddleContent = (props) => {

    const {data} = props;
    
    return (
        <div className='middleContent'>
            {data !== null && 
            <div>
                <h2>{data.title}</h2>
                <p>{data.explanation}</p>
            </div>}
        </div>
    )
}

export default MiddleContent