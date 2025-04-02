import React from 'react';
import styles from './Header.module.css';
import sushiImage from '../../assets/sushi.jpg';
import { HeaderCartButton } from './HeaderCartButton';

export function Header(props) {
   return (
      <React.Fragment>
         <header className={styles.header}>
            <h1>Япона Кухня</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
         </header>
         <div className={styles['main-image']}>
            <img src={sushiImage} alt='Sushi' />
         </div>
      </React.Fragment>
   )
}