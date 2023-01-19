import React from 'react'
import { Link } from 'react-router-dom';

const BannerMenu = () => {
    return (
        <>
          <div className="hero-section" id="hero-section">
              <div className="filter"></div>
              <div className='hero-background'>
                <img src={require('../../images/home_page_banner.jpg')} />
              </div>
              <div className="hero-content">
                <div className='full-gutter pad-b-xl'>
                    <div className='grid-2'>
                        <div className='grid-item'>
                            <img className="img-medium" src={require('../../images/5a38c81c0bc467.9075323715136706840482.png')} alt="Royale Burger"/>
                        </div>
                        <div className='grid-item'>
                            <div className="hero-title">
                                <div className='flex-row-between full-width pad-b-l'>
                                    <h1 className="white-text home-title">Le Royale Burger</h1>
                                    <div className='img-x-small bg-icon-orange'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className='white-text regular-text pad-b-l'>Ce burger est fait pour les amoureux de la viande et du hamburger maison, avec ses oignons et son bacon grillé, il vous fera salivé grâce a ses cornichons et ça sauce maison.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='separator'></div>
                <div className='hero-shape'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 251.386">
                        <path id="Shape" d="M0-75.918s144.095,124.661,528.347,94.1S1229.1-116.248,1515.664-116.248C1790.511-120.729,1920-18.663,1920-18.663V134.994H0Z" transform="translate(0 116.392)" fill="#fff"/>
                    </svg>
                </div>
              </div>
          </div>
        </>
    )
}

export default BannerMenu