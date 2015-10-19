import React, {Component, PropTypes} from 'react';
import {Comment} from './Comment';

export class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
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
}