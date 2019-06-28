import React from 'react';
import styles from './GuessPeg.module.css'

const GuessPeg = (props) => (
  <div>
    <button className={styles.button}
      style={{
        backgroundColor: props.color,
        borderColor: props.color
      }}
      
    />
  </div>
);

export default GuessPeg;
