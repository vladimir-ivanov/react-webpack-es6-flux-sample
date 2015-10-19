'use strict';

import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

    handleServerAction(action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    }
}

const instance = new AppDispatcher();
export default instance;

export const dispatch = instance.dispatch.bind(instance);