import React from 'react';

export var CommentForm = React.createClass({
    handleSubmit: function (e) {
        console.log('submitting');
         e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }

        console.log(author, text);
        // TODO: send request to the server
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },

    handleCommentSubmit: function (comment) {
        // TODO: submit to the server and refresh the list
    },

    render: function () {
        console.log('render');
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author"/>
                <input type="text" placeholder="Say something..." ref="text"/>
                <input type="submit" value="Post"/>
            </form>
        );
    }
});