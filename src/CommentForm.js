import React, {Component, PropTypes} from 'react';
import {commentsActions} from './actions/CommentsActions';

export class CommentForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Your name" ref="author"/>
                <input type="text" placeholder="Say something..." ref="text"/>
                <input type="submit" value="Post"/>
            </form>
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();

        if (!text || !author) {
            return;
        }

        commentsActions.create({author, text});

        this.refs.author.value = '';
        this.refs.text.value = '';
    }
}