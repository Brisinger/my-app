import { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Navigation from '../Navigation/Navigation';

export default class Sidebar extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Navigation>
                    {this.props.name}
                </Navigation>
            </ErrorBoundary>
        );
    }
}