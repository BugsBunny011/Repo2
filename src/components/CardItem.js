import React from 'react';
import { Link } from 'react-scroll';

function CardItem(props) {
  return (
    <li className='cards__item'>
      {props.text === 'Company Catalogue' ? (
        // If it's the Company Catalogue card, use an <a> tag for downloading
        <a 
          className='cards__item__link' 
          href='/LINKWEL ELEVATORS COMPANY PROFILE & CATALOGUE 2.pdf' // Path to your PDF file
          download // Forces download
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Company Catalogue' className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      ) : (
        // Otherwise, use react-scroll for scrolling behavior
        <Link
          className='cards__item__link'
          to={props.path}
          smooth={true}
          duration={500}
          offset={-80}
        >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Travel Image' className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      )}
    </li>
  );
}

export default CardItem;
