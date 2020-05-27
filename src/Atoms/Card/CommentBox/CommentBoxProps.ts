export interface CommentBoxProps {
    className?: string;
    data: CommentOptions;
}

export interface CommentOptions {
    placeholder: string;
    value?: string;
}