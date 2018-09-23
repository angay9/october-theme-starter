require('./bootstrap');

import { App } from './app';

const app = new App();

$(document).ready(e => {
    app.start();
});

