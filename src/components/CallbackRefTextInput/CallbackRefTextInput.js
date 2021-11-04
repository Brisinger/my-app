import { Component } from "react";

export default class CallBackRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.inputRef = element => {
            this.textInput = element;
        };
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
            <div className='my-3'>
                <h2>Callback Ref Input</h2>
                <input
                    ref={this.props.inputRef}
                    type='text'
                    className='border border-gray-500' />
            </div>
        );
    }
}