import React from 'react';
import styles from './ScoreButton.module.css';

const ScoreButton = (props) => (
  <button className={`${styles.button} btn btn-default`}
    disabled={props.code.includes(null)}
    >
    ✔
  </button>
);

export default ScoreButton;
