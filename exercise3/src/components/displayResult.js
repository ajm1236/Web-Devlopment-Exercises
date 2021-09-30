import React from 'react';
import styles from './display.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.listing }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={styles.name }>{props.name}</div>
          <div className={styles.developer}><b>{props.developer}</b></div>
          <div className={styles.location}>{props.location}</div>
          <br></br>
          <div><b>Price: </b> €{props.price} <div className={styles.discount}><b>{props.discount[0]}</b><s>€{props.discount[1]}</s></div></div>
          <div className={styles.rating}><b>Rating: {props.rating} / 5</b></div>
        </div>
    </div>
  )
}
