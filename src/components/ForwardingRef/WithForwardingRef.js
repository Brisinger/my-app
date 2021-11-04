import React from "react";

export function WithForwardingRef(WrappedComponent) {
    class WithForwardingRef extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            return (
                <div>
                    <div>HOC for forwarding ref</div>
                    <WrappedComponent name={this.props.name} control={this.props.control} ref={this.props.headingRef} />
                </div>
            );
        }
    };
    return React.forwardRef(
        (props, ref) => {
            return <WithForwardingRef {...props} headingRef={ref} />
        }
    );
}