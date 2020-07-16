import React from 'react'

const Header = (props) => {

    const {data} = props;

    return (
        <div className='header'>
            {data !== null && 
            <div>
                <h1>Photo Of The Day</h1>
                <nav className='nav'>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                </nav>
                <img src={data.hdurl}/>
            </div>}
        </div>
    )
}

export default Header