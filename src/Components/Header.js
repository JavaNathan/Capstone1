import React from 'react';
import bannerImg from '../Assets/restauranfood.jpg';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist</p>
                    <button aria-label='On Click'>Reserve Table</button>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    );
};

export default Header;