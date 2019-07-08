import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styles from './StarshipPage.module.css'

function StarshipPage (props) {
    return (
        <div className='starshipPage'>
            <div>{props.starship[props.match.params.idx].name}</div>
            <div>{props.starship[props.match.params.idx].model}</div>
            <Link to='/'>Back</Link>
        </div>
    )
}


export default StarshipPage