import React, { Component } from 'react'
import { CardProps } from './CardProps';
import './Card.scss';
import Label from '../Label/Label';
import { LabelTypes } from '../Label/LabelProps';
import { Statsbar } from './Statsbar/Statsbar';
import { CardStates } from './CardStates';
import { CommentBox } from './CommentBox/CommentBox';

const defaultAvatar = 'https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60';

export default class Card extends Component<CardProps, CardStates> {
    constructor(props: Readonly<CardProps>) {
        super(props);
        this.state = {
            isLiked: false,
        }
    }
    render() {
        const dispPic: string = this.props.cardData.avatarUrl ? this.props.cardData.avatarUrl : defaultAvatar;
        return (
            <div className="card-container">
                <div className="line-break  card-padding card-head">
                    <div 
                        className="avatar-frame"
                        style={{backgroundImage: `url(${dispPic})`}}
                    />
                    <Label
                        options={{
                            className:"user-name",
                            type: LabelTypes.HEADING,
                        }}
                        text={this.props.cardData.uname}
                    />
                </div>
                <div>
                    {this.props.cardData.contentImg &&
                        <img
                            alt="content Image"
                            className="card-img"
                            src={this.props.cardData.contentImg}
                        />
                    }
                    {this.props.cardData.content &&
                    <Label
                        text={this.props.cardData.content}
                        options={{
                            className:"card-padding",
                            type:LabelTypes.LIMITED
                        }}
                    />}
                    <Statsbar
                        isLiked={this.state.isLiked}
                        toggleLike={this.toggleLike}
                        key={this.state.isLiked ? 1 : 0}
                    />
                    <CommentBox
                        data={{
                            placeholder:"What's in your mind ..."
                        }}
                    />
                </div>
            </div>
        )
    }

    private toggleLike = () => {
        this.setState({isLiked : !this.state.isLiked})
    }
}
