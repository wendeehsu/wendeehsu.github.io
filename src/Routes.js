import React from 'react';
import {Switch, Redirect, Route, BrowserRouter} from "react-router-dom";
import Work from "./components/Work";
import Medium from "./components/Medium";
import Me from "./components/Me";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" component={Work}/> */}
                <Route path="/Work" component={Work} />
                <Route path="/Medium" component={Medium} />
                <Route path="/Me" component={Me} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;