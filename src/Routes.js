import React, { useLayoutEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Work from "./container/Work";
import Medium from "./container/Medium";
import Me from "./container/Me";
import RedesignBLI from "./container/Projects/RedesignBLI";
import ARLens from "./container/Projects/ARLens";
import AIXray from "./container/Projects/AIXray";
import PDOGS from "./container/Projects/PDOGS";
import ColorTuning from "./container/Projects/ColorTuning";

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