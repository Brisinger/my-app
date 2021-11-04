import React, { Component } from "react";
import ForwardingRefButton from "./ForwardingRefButton";

export default class ParentForwardingRefButton extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }
    componentDidMount() {
        if (this.buttonRef) {
            console.log(this.buttonRef);
            this.buttonRef.current.innerHTML = 'Shubhojit Web Dev';
        }
    }

    render() {
        return (
            <div>
                <ForwardingRefButton name='Click Me' control='Now' ref={this.buttonRef} />
            </div>
        );
    }
}