import React, { Component } from 'react';
import Navbar from './navBar';
import './navBar.scss';
import colorLogo from '../../assets/images/logo/logo-color.svg';
import whiteLogo from '../../assets/images/logo/logo-white.svg';



export default class NavHeader extends Component {
    state = {
        color: 'clear',
        textColor: 'text-white',
        logo:{whiteLogo},
        navSize: 'navSizeGrow',
        timeoutDebounce: null
    }

    componentDidMount() {
        window.addEventListener('scroll', this.debounce)
    }

    debounce = e => {
        let { timeoutDebounce } = this.state;

        if (timeoutDebounce) {
            return;
        }

        timeoutDebounce = setTimeout(this.clearDebounce, 250);
        this.listenScrollEvent(e);
    }

    clearDebounce = () => {
        this.setState({
            timeoutDebounce: null
        })
    }



    listenScrollEvent = e => {

        
        if (window.scrollY > 10) {
            this.setState({
                color: 'dark',
                textColor: 'text-white',
                navSize: 'navBarShrink',
                logo:{colorLogo},
            })
        } else {
            this.setState({
                color: 'clear',
                textColor: 'text-white',
                navSize: 'navSizeGrow',
                logo:{whiteLogo}
            })
        }
    }



    render() {
        return <Navbar logo={this.state.logo} navSize={this.state.navSize} headerColor={this.state.color} textColor={this.state.textColor} />
    }

}