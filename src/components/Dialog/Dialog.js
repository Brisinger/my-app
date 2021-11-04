import { Component } from "react";

class Dialog extends Component {
    render() {
        return <div>
            <div>Dialog Data</div>
            <div>{this.props.children}</div>
        </div>;
    };
}

export default Dialog;