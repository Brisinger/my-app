import { Component } from 'react';
import SinglePost from '../SinglePost/SinglePost';
import AddPost from '../AddPost/AddPost';
import Dialog from '../Dialog/Dialog';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    id: 1,
                    title: 'post 1',
                    description: 'post1 description 1'
                },
                {
                    id: 2,
                    title: 'post 2',
                    description: 'post2 description 2'
                },
                {
                    id: 3,
                    title: 'post 3',
                    description: 'post3 description 3'
                },
            ],
            postTitle: 'Posts List',
            showPosts: true,
            count: 0,
        };
        console.log('[posts.js] constructor called.');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[posts.js] derivedStateFromProps called.');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[posts.js] shouldComponentUpdate fired.');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`[${snapshot}] componentDidUpdate fired.`);
    }

    componentDidMount() {
        console.log('[posts.js] component did mount called.')
    }

    togglePostHandler = (e) => {
        e.preventDefault();
        this.setState({
            showPosts: !this.state.showPosts,
        });
    }

    onchangeTitleHandler = (key, e) => {
        e.preventDefault();
        const postIndex = this.state.posts.findIndex((post) => post.id === key);
        const posts = [...this.state.posts];
        posts[postIndex].title = e.target.value;
        this.setState({
            posts,
        });
    }

    getPosts() {
        if (this.state.showPosts) {
            let posts = [];
            // let posts = this.state.posts.map((post) => (
            //     <SinglePost
            //         title={post.title}
            //         description={post.description} />
            // ));

            // return (
            //     <div className="flex my-3">
            //         {posts}
            //     </div>
            // );
            for (const post of this.state.posts) {
                posts.push(
                    <SinglePost
                        key={post.id}
                        title={post.title}
                        addpost={<AddPost/>}
                        description={post.description}
                    >
                        <div className='my-2'>
                            <input
                                type='text'
                                value={post.title}
                                onChange={this.onchangeTitleHandler.bind(this, post.id)}
                                className='px-5 py-2 rounded-xl border border-gray-500' />
                        </div>
                    </SinglePost>
                );
            }
            // return (
            //     <div className="flex my-3">
            //         {
            //             this.state.posts.map((post) => (
            //                 <SinglePost
            //                     key={post.id}
            //                     title={post.title}
            //                     description={post.description}
            //                 />
            //             ))
            //         }
            //     </div>
            // );
            return (
                <div className='flex my-3'>
                    {posts}
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        console.log('[posts.js] render called.');
        return (
            <div>
                <div>{!!this.state.count && 'Show Count'}</div>
                <h2 className="text-2xl my-3">{this.state.postTitle}</h2>
                <div>
                    <button
                        onClick={this.togglePostHandler}
                        className="px-5 py-3 my-1 bg-red-500 rounded-3xl text-white">
                        {this.state.showPosts ? 'Hide Posts' : 'Show Posts'}
                    </button>
                </div>
                <hr />
                {this.getPosts()}
                <div className='flex'>
                    <div className='my-5 mx-2 flex-1'>
                        <AddPost />
                    </div>
                    <div className='flex-1 mx-2 my-5'>
                        <Dialog>
                            <div>
                                Showing the dialog data
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[posts.js] getSnapshotBeforeUpdate fired.');
        return 'Posts.js';
    }

    componentWillUnmount() {
        console.log('[posts.js] component will unmount fired.');
    }
}

export default Posts;