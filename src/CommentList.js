import React from 'react';
import {Comment} from './Comment';

export var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(comment => {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});
