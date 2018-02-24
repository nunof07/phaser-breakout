const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body><div id="game"></div></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
    Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .forEach(prop => {
            target[prop] = src[prop];
        });
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);