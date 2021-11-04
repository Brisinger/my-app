import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        console.log('[ErrorBoundary.js] getDerivedStateFromError fired.');
        return { hasError: true};
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
        console.log('[ErrorBoundary.js] componentDidCatch fired.');
    }

    render() {
        if (this.state.hasError)
            return <div>An error occured.</div>;
        else
            return this.props.children;
    }
}