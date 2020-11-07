import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Work from "./components/Work";
import Medium from "./components/Medium";
import Me from "./components/Me";
import RedesignBLI from "./components/Projects/RedesignBLI";
import ARLens from "./components/Projects/ARLens";
import AIXray from "./components/Projects/AIXray";

function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Work}/>
                <Route exact path="/Work" component={Work} />
                <Route path="/Work/RedesignBLI" component={RedesignBLI} />
                <Route path="/Work/ARLens" component={ARLens} />
                <Route path="/Work/AIXray" component={AIXray} />
                <Route path="/Medium" component={Medium} />
                <Route path="/Me" component={Me} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;