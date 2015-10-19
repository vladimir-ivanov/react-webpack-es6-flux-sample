import React from 'react';
import marked from 'marked';

export class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    rawMarkup() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup};
    }

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
}