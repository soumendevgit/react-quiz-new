import React from 'react';
import logo from '../assets/images/logo-bg';
import classes from '../styles/Nav.module.css';
import Account from './Account';


export default function Nav() {
    return (
        <nav class={classes.nav}>
          <ul>
            <li>
              <a href="index.html" class={classes.brand}>
                <img src={logo} alt="Learn with Sumit Logo" />
                <h3>Learn with Sumit</h3>
              </a>
            </li>
          </ul>
      <Account />
    </nav>
    )
}
