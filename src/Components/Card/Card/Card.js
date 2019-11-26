import React, { Component } from 'react';
import Header from './Header/Header';
import Section from '../../Container/Container';
import CardFoot from './CardFoot/CardFoot';
import classes from './Card.module.css';

class Card extends Component {
    render() {

        return <div 
        className = {classes.card}>
            <Section>
                <Header />
                <CardFoot />
            </Section>
        </div>
    }
}

export default Card;