import React from 'react';
import './CommentBox.scss';
import { CommentBoxProps } from './CommentBoxProps';

export const CommentBox: React.FC<CommentBoxProps> = (props) => {
    const contStyle = [
        "comment-container",
        props.className ? props.className : '',
    ].join(' ');

    return (
        <div className={contStyle}>
            <input
                type="text"
                className="comment"
                placeholder={props.data.placeholder}
            />
        </div>
    )
}
