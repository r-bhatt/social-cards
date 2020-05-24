import React from 'react';
import './Statsbar.scss';
import { StatsbarProps } from './StatsbarProps';

export const Statsbar:React.FC<StatsbarProps> = (props) => {
    return (
        <div className="stats-bar">
            <button className="stat" onClick={props.toggleLike}>
                {props.isLiked ? 
                    <i className="fas fa-lg fa-heart" color="red"/> :
                    <i className="far fa-lg fa-heart"/>
                }
            </button>
            <button className="stat"><i className="far fa-lg fa-comment-alt"/></button>
            <button className="stat"><i className="far fa-lg fa-share-square"/></button>
        </div>
    )
}