import utils from './utils/index';

export default {
    install: (app) => {
        app.config.globalProperties.$utils = utils;
    }
}