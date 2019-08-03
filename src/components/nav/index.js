import React, { Component } from 'react';
import Navbar from './navBar';
import './navBar.scss';


export default class NavHeader extends Component {
    state = {
        color: 'clear',
        textColor: 'text-white',
        navSize: 'navSizeGrow'
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    listenScrollEvent = e => {
        if (window.scrollY > 10) {
            this.setState({
                color: 'white',
                textColor: 'text-dark',
                navSize: 'navBarShrink '
            })
        } else {
            this.setState({
                color: 'clear',
                textColor: 'text-white',
                navSize: 'navSizeGrow'
            })
        }
    }



    render() {
        return <Navbar navSize={this.state.navSize} headerColor={this.state.color} textColor={this.state.textColor} />
    }

}