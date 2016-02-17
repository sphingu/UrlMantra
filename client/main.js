import {createApp} from 'mantra-core';
import coreModule from "./modules/core";
import initContext from './configs/context';

// modules

// init context
const context = initContext();

// create app
const app = createApp(context);

app.loadModule(coreModule);

app.init();
