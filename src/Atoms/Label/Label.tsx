import React, { Component } from 'react'
import { LabelProps, LabelTypes } from './LabelProps';
import './Label.scss';
import { LabelStates } from './LabelStates';

export default class Label extends Component<LabelProps, LabelStates> {
    constructor(props: Readonly<LabelProps>) {
        super(props);
        this.state = {
            isTrimmed: true,
        }
    }
    
    render() {
        const fontStyles = [
            this.props.options && this.props.options.type ? this.props.options.type : '', 
            this.props.options && this.props.options.font ? this.props.options.font : '', 
            this.props.options && this.props.options.className ? this.props.options.className : '', 
        ].join(' ');
        return (
            <div className={fontStyles}>
            {
                this.props.options && this.props.options.type ? 
                    this.processLabel(this.props.text, this.props.options.type) : this.props.text
            }
            </div>
        )
    }
    
    private processLabel = (text: string, type: string) => {
        switch(type) {
            case LabelTypes.HEADING :
                return text.toLowerCase();
            case LabelTypes.LIMITED:
                return this.limitText(text);
            default :
                return text;
        }
    }

    private limitText = (text: string) => {
        if (this.state.isTrimmed) {
            return (
            <> 
                {text.slice(0,84)}...<br/>
                <label onClick={this.toggleTrim} className="see-label">See more</label>
            </>)
        } else {
            return (
                <> 
                    {text}<br/>
                    <label onClick={this.toggleTrim} className="see-label">See less</label>
                </>)
        }
    }

    private toggleTrim = () => {
        this.state.isTrimmed ? this.setState({isTrimmed: false}) : this.setState({isTrimmed: true});
    }
}
