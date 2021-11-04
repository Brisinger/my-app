import React, { Component } from "react";
import Button from '../Button/Button';
import { WithForwardingRef } from "./WithForwardingRef";

class ForwardingRefButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 ref={this.props.buttonRef}>Forwarding Ref</h2>
                <Button name={this.props.name} control={this.props.control} />
            </div>
        );
    }
}

export default WithForwardingRef(
    React.forwardRef((props, ref) => {
        return <ForwardingRefButton buttonRef={ref} {...props} />;
    })
);