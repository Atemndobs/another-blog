import React from 'react'
import "../App.css"

import timeage from 'timeago.js'
import {Link} from "react-router-dom";

class BlogPostList extends React.Component {

    render() {
        const {posts, isFetching} = this.props;

        if(isFetching){
            return (<div><i className="fas fa-spinner fa-spin"/></div>)
        }

        if(null === posts || 0 ===posts.length){
            return(<div>No Blog Posets </div>)
        }

        return (
        <div className="App-header">
                {posts && posts.map(post => (

                    <div className="App card mb-3 mt-3 shadow-sm" key= {post.id}>
                                <div className="card-body">
                                    <h3 >
                                        <Link to={`/blog-post/${post.id}`}>{post.title}</Link>
                                    </h3>
                                    <p className="card-text border-top">{post.author}</p>
                                    <small className="text-muted">
                                        {timeage().format(post.published) }
                                    </small>
                                </div>
                    </div>
                ))}
        </div>
        );
    }
}

export default BlogPostList;
