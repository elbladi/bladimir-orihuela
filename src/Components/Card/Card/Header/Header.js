import React, { Fragment } from 'react';
import classes from './Header.module.css';

const Header = () => (
    <Fragment>
        <p className= {classes.card_info_head}> Bladimir Orihuela</p>
        <p className={classes.card_info_dgree}>Software Engineer at Hexaware</p>
        <p className={classes.card_info_description}> Hi, my name is Bladimir and I am a Software Engineer, working in Hexaware Technologies. I like challenges and grow as professional every day. I enjoy developing creative solutions in React js, Angular, Java and Python. I consider myself as a great team member, and a Dog lover. </p>
        <h2 className= {classes.contact}>Contact</h2>
    </Fragment>
)


export default Header;