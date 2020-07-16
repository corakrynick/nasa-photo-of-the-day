import React from 'react'

const Footer = (props) => {

    const {data} = props;
    return (
        <div className='header'>
            {data !== null && 
            <div>
                <p>{data.copyright}</p>
            </div>}
        </div>
    )
}

export default Footer