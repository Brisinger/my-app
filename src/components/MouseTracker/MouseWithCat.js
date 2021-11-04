import React from "react"
import Cat from "./Cat";
import MouseTracker from "./MouseTracker";

export default class MouseWithTracker extends React.Component {
    render() {
        return (
            <div 
                style={{ height:'100vh', width:'100vw'}}>
                <MouseTracker render={(mouse) => (
                    <Cat mouse={mouse}/>
                )}/>
            </div>
        );
    }
}