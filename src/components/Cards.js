import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards(){
    return(
        <div id='cards-section' className='cards'>
            <div className='cards'>
                <h1>Learn More About Us</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem 
                            src='/Final Images/DetailedProductInformation.png'
                            text='Detailed Product Information'
                            label='Products'
                            path='/services'
                            />
                            <CardItem 
                            src='/Final Images/Comapny Catlogue Image.jpeg'
                            text='Company Catalogue'
                            label='About Us'
                            path='/services'
                            />
                            <CardItem 
                            src='/Final Images/Customizeyourownelevator.png'
                            text='Customize Your Own Elevator'
                            label='Services'
                            path='/services'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;