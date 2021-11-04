import { Component } from "react";
import { WithCategory } from "./WithCategory";

class Category extends Component {
    render() {
        return (
            <div>
                <div>Categories component-name: {this.props.name}.</div>
                <div>{this.props.title}</div>
                <div>{this.props.categories.map((category, index) => {
                    return <div key={index}>{category}</div>;
                })}</div>
            </div>
        );
    }
}

export default WithCategory(0)(Category);