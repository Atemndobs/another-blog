import React from 'react'
import {blogPostFetch} from '../actions/actions';
import { connect } from 'react-redux';
import BlogPost from './BlogPost'

const mapStateToProps = state => ({
    ...state.blogPost
});

const mapDispatchToProps = {
    blogPostFetch
};

 class BlogPostContainer extends React.Component {

    componentDidMount(){

        console.log(this.props);
        console.log(this.props.match.params.id)
        

        this.props.blogPostFetch(this.props.match.params.id)
        .then(Response => console.log(this.props.post));
        


    }
    render() {
        return (
            <BlogPost />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);
