import React from 'react';
import {Switch, Redirect, Route, BrowserRouter} from "react-router-dom";
import Work from "./components/Work";
import Medium from "./components/Medium";
import Me from "./components/Me";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Work" component={Work} />
                <Route path="/Medium" component={Medium} />
                <Route path="/Me" component={Me} />
            </Switch>
        </BrowserRouter>
        // <Router history={browserHistory}>
        //     <Route path={"Work"} component={Work} />
        //     <Route path={"Medium"} component={Medium} />
        //     <Route path={"Me"} component={Me} />
        // </Router>
    )
}

export default Routes;