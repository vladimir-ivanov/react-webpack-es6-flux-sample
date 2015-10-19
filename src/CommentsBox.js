import React from 'react';
import {CommentForm} from './CommentForm';
import {CommentList} from './CommentList';
import {commentsStore} from './stores/CommentsStore';

function getTodoState() {
    return {
        data: commentsStore.getAll()
    };
}

export class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = getTodoState();
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
}