import React from "react"

export default class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0};
    }
    handleMouseMove = (e) => {
        e.preventDefault();
        this.setState(
            {
                x: e.clientX,
                y: e.clientY,
            }
        );
    }

    render() {
        return (
            <div 
                style={{ height:'100vh', width:'100vw'}}
                onMouseMove={this.handleMouseMove}>
                <div>Please move the mouse pointer.</div>
                <div>The mouse pointer position is x: {this.state.x} and y: {this.state.y}</div>
                {this.props.render(this.state)}
            </div>
        );
    }
}