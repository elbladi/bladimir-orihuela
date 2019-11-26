import React from 'react';
import classes from './Contact.module.css';

const Contact = (props) => (
    <li className= {classes.card_foot_contact_item}>
        <a href={props.content}>
            <svg
                xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path
                    d={props.d}>
                </path>
            </svg>
        </a>
    </li>
)

export default Contact;