import { Component } from "react";

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = '';
        console.log('[SinglePosts.js] constructor called.');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[SinglePosts.js] getDerivedStateFromProps called.');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[SinglePosts.js] shouldComponentUpdate fired.');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[SinglePosts.js] getSnapshotBeforeUpdate fired.');
        return 10;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`[SinglePosts.js] component did update fired ${snapshot}.`);
    }

    render() {
        console.log('[SinglePosts.js] render called.');
        return (
            <div className="m-4 p-3 border border-gray-400 shadow">
                <h3 className="text-xl font-bold text-blue-400">
                    {this.props.title}
                </h3>
                <div>{this.props.description}</div>
                <div>{this.props.children}</div>
                <div>{this.props.addpost}</div>
            </div>
        );
    };

    componentDidMount() {
        console.log('[SinglePosts.js] component did mount called.');
    }

    componentWillUnmount() {
        console.log('[SinglePosts.js] component will unmount fired.');
    }
}

export default SinglePost;