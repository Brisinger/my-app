import { Component } from "react";
import CallBackRefTextInput from "./CallbackRefTextInput";

export default class ParentCallbackRefInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;

    }
    componentDidMount() {
        if (this.textInput) {
            console.log(this.textInput);
            this.textInput.focus();
            this.textInput.value = 'Shubhojit Web Dev';
        }
    }

    render() {
        return (
            <div>
                <CallBackRefTextInput inputRef={e => this.textInput = e}/>
            </div>
        );
    }
}