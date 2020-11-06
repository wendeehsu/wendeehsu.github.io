import React, { Component } from 'react';
import "../../css/Projects/shared.css";

class NavLink extends Component {
    render() {
        const sectionStyle = {
            maxWidth: "70%",
            margin: "5rem auto"
        };
        const linkStyle = {
            marginLeft : "0.2em",
            borderBottom: "1px dotted"
        };
        return (
            <div className="row justify-content-end" style={sectionStyle}>
                <h6>
                    Visit <a className="pink-text" style={linkStyle} href={this.props.pageUrl}>{this.props.project}</a>
                </h6>
            </div>
        )
    }
}

export default NavLink;