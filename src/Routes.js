import React, { useLayoutEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Work from "./components/Work";
import Medium from "./components/Medium";
import Me from "./components/Me";
import RedesignBLI from "./components/Projects/RedesignBLI";
import ARLens from "./components/Projects/ARLens";
import AIXray from "./components/Projects/AIXray";
import PDOGS from "./components/Projects/PDOGS";
import ColorTuning from "./components/Projects/ColorTuning";

function Routes() {
    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Switch>
            <Route exact path="/" component={Work}/>
            <Route exact path="/Work" component={Work} />
            <Route path="/Work/ColorTuning" component={ColorTuning} />
            <Route path="/Work/PDOGS" component={PDOGS} />
            <Route path="/Work/RedesignBLI" component={RedesignBLI} />
            <Route path="/Work/ARLens" component={ARLens} />
            <Route path="/Work/AIXray" component={AIXray} />
            <Route path="/Medium" component={Medium} />
            <Route path="/Me" component={Me} />
        </Switch>
    )
}

export default Routes;