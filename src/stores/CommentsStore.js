import appDispatcher from '../AppDispatcher';
import {Store} from 'flux/utils';

class CommentsStore extends Store {
    constructor() {
        super(appDispatcher);

        this.dispatchToken = appDispatcher.register(action => {
            switch(action.type) {
                case '':
                    //ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
                    //_markAllInThreadRead(ThreadStore.getCurrentID());
                    //MessageStore.emitChange();
                    break;
                default:
                // do nothing
            }
        });
    }

    getAll() {
        return [
            {
                "author": "Pete Hunt",
                "text": "This is one comment"
            },
            {
                "author": "Jordan Walke",
                "text": "This is *another* comment"
            }
        ];
    }

    addChangeListener(callback) {
        callback();
    }

    removeChangeListener(callback) {
        callback();
    }
}

export const commentsStore = new CommentsStore();
