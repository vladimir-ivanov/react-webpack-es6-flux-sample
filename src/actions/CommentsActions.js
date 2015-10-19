import appDispatcher from '../AppDispatcher';

class CommentsActions {

    /**
     * @param  {string} text
     */
    create(details) {
        appDispatcher.handleViewAction({
            actionType: 'createComment',
            details: details
        });
    }

    /**
     * @param  {string} id
     */
    destroy(id) {
        appDispatcher.handleViewAction({
            actionType: 'destroyComment',
            id: id
        });
    }
}

export const commentsActions = new CommentsActions();