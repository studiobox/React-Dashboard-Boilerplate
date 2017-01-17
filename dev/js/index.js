import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../css/main.css'
import componentStyles from '../css/component.css'
import img from '../images/final-logo.png'
import consulting from '../images/consulting_service.jpg'

ReactDOM.render(
    <div>
        <h1 className="welcome-head">Welcome to React Dashboard Boilerplate</h1>
        <img src={consulting}/>
        <p>A basic project to use for any type of dashboard project. This basic boilerplate is wraped with React and Redux and basic HTML5/CSS3 configuration.</p>
    </div>,
    document.getElementById('app')
)
