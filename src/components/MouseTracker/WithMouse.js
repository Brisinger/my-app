import MouseTracker from "./MouseTracker";
import React from "react";

export function WithMouse(Component) {
    return class extends React.Component {
        render() {
            return (
                <MouseTracker render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )} />
            );
        }
    }
}