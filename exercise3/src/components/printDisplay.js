import React from 'react';
import styles from './print.module.css';
import SearchResult from './displayResult';

export default function ShowSearch(props) 
{

  return (
    <div>
      <div className={ styles.presentationModeGrid }>
      {
        props.items.map(item => <SearchResult key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
