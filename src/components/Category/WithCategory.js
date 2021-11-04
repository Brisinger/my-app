import { Component } from "react";
export function WithCategory(limit) {
    return function WithCategory(WrappedComponent) {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    title: 'Name from HOC',
                    categories: [
                        'category1',
                        'category2',
                        'category3',
                        'category4',
                    ],
                };
            }
            render() {
                const categories = this.state.categories.slice(0, limit);
                return (
                    <div>
                        <div>Component title</div>
                        <WrappedComponent {...this.props} categories={categories} title={this.state.title}/>
                    </div>
                );
            }
        }
    }
}