import ReactGA from 'react-ga4';

export const initGA = () => {       
    ReactGA.initialize('G-Y6XYC627EV');
}

export const GApageView = (path, pagename) => {   
    ReactGA.send({ hitType: "pageview", page: "/" + path, title: pagename });
}

export const GAevent = (categoryName, eventName) => {
    ReactGA.event({       
        category: categoryName,  // Required
        action: eventName       // Required
    });   
}