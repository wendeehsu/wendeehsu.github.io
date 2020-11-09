import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                    Visit <Link className="pink-text" style={linkStyle} to={this.props.pageUrl}>{this.props.project} &#8594;</Link>
                </h6>
            </div>
        )
    }
}

export default NavLink;