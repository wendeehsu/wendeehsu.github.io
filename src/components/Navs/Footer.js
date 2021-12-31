import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const footerStyle = {
            height: "3rem",
            marginTop: "4rem"
        };
        return (
            <div className="center-text gray-text" style={footerStyle}>
                © 2022 Wendee Hsu | All rights reserved.
                <img className="navbar-icon" src="/icon.png" />
            </div>
        )
    }
}

export default Footer;