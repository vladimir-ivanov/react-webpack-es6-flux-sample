import {React} from 'react';
import {ReactDOM} from 'react-dom';
import {CommentBox} from './CommentsBox';

ReactDOM.render(
    <CommentBox url="http://localhost:63342/untitled1/api/comments.json" pollInterval={2000} />,
    document.getElementById('content')
);