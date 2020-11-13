import ReactGA from 'react-ga';

export const initGA = () => {       
    ReactGA.initialize('UA-182997316-1');
}

export const GApageView = (page) => {   
    ReactGA.pageview(page);   
}

export const GAevent = (categoryName, eventName) => {
    ReactGA.event({       
        category: categoryName,  // Required
        action: eventName       // Required
    });   
}