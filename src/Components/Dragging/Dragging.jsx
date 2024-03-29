import React, { Component } from 'react';
import Calc from '../Calc/Calc';
import './Dragging.css';

export default class Dragging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false,
            styles: {}
        };
        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }
    // componentDidMount function
    _dragStart(e) {
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }
    _dragging(e) {
        var left = e.screenX - this.state.diffX;
        var top = e.screenY - this.state.diffY;
        if (this.state.dragging) {
            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }
    _dragEnd() {
        this.setState({
            dragging: false
        });
    }
    // render function
    render() {
        var classes = this.props.show ? 'Dragging' : 'Dragging hide';
        return (
            <div className={classes} style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
                <Calc />
                <div className="shortPcalc"> This calculator is draggable.</div>
            </div>
        );
    }
}
