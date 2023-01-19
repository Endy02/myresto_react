import React, { useState } from 'react'
import BannerMenu from './BannerMenu'
import { motion } from 'framer-motion'
import { faMortarPestle, faBottleWater, faBurger, faTree, faIceCream, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () =>{
    setClick(!click);
  }

  const ProdcutModal = () => {
    return(
      <>
        <div className='basic-modal-wrapper'>
          <motion.div className='basic-modal-filter' initial={{opacity: 0}} animate={{opacity:.85}}></motion.div>
          <motion.div className='basic-modal' initial={{opacity: 0}} animate={{opacity:1}} onClick={handleClick}>
            <div className='basic-modal-dsp'>
              <p onClick={handleClick}>YOO</p>
            </div>
            <div className='basic-modal-content'>
              <div className='grid-2'>
                <div className='grid-item'>

                </div>
                <div className='grid-item'>
                  <div className='flex-col'>
                    <h3 className='medium-text bold-text black-text'>Peachy Burger</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='basic-modal-footer'>

            </div>
          </motion.div>
        </div>
      </>
    )
  }

  return (
    <>
    {click == true ? <ProdcutModal /> : null}
      <div className='container'>
        <BannerMenu />
      </div>
      {console.log(click)}
      
      <div className='container'>
        <div className='flex-col'>
          <div className='full-gutter'>
            <div className='grid-2-2'>
              <div className='grid-item-t'>
                <div className='nav-card'>
                  <ul className='nav-card-list'>
                    <li className='nav-card-item-active'><faBurger /><p className='medium-text bold-text'>Burgers</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'><faBurger />Salade</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Formule</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Plats</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Boissons</p></li>
                    <li className='nav-card-item'><p className='medium-text bold-text'>Dessert</p></li>
                  </ul>
                </div>
              </div>
              <div className='grid-item-t'>
                <div className='flex-col-center full-width'>
                  <div className='grid-4'>
                    {/* TODO : Map All Burgers  */}
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                    <div className='grid-item'>
                      <div className='d-card'>
                        <div className='d-card-header' onClick={e => {handleClick(e)}}>
                            <img className='img-cover' src={require('../../images/burgercamere.jpg')} />
                        </div>
                        <div className='d-card-content'>
                          <p className='medium-text bold-text black-text pad-b-s'>Peachy Burger</p>
                          <p className='small-text thin-text black-text pad-b-s'>Double steack, fromage, Bacon, Cornichon, Sauce Maison, Pain Céréale.</p>
                          <p className='medium-text bold-text black-text pad-b-s'>9,00 €</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='separator'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu