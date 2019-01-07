export function shouldLog() {
    return process.env.NODE_ENV !== 'production'
    // return true
}

export function backendRestUrl() {
    let location = window.location;
    let port = '';
    if (process.env.NODE_ENV === 'development') {
        port = ':3004'
    } else {
        port = location.port ? ':' + location.port : ''
    }
    return location.protocol + '//' + location.hostname + port + '/';
}

export function browserInfo() {
    const { detect } = require('detect-browser');
    const browser = detect();
    if (browser) {
        console.log("Browser Name:", browser.name);
        console.log("Browser Version:", browser.version);
        console.log("Browser OS:", browser.os);
        console.log("Browser resolution (w x h):", window.innerWidth, "x", window.innerHeight);
    } else {
        console.log("Browser not detected");
    }
}
