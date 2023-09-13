import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import NavLink from '../Navs/NavLink';
import { GApageView } from "../../ga.js";

class ColorTuning extends Component {
    componentDidMount() {
        GApageView("Color Tuning");
    }

    render() {
        return (
            <div>
                Color Tuning
            </div>
        );
    }
}

export default ColorTuning;