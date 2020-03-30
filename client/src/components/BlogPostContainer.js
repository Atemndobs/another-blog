import React from 'react'
import {Link} from "react-router-dom";

class BlogPostContainer extends React.Component {

    componentDidMount(){

        console.log(this.props.match.params.id);


    }
    render() {
        return (

            <div class="App card mb-3 mt-3 shadow-sm App-header">
                <div class="card-body">
                    <h3 >
                        Single Post
                    </h3>
                    <p class="card-text border-top"> Post name</p>
                    <small className="text-muted">
                        time
                    </small>
                </div>
            </div>
        );
    }
}

export default BlogPostContainer;
