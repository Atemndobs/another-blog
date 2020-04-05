import React from 'react';

import '../App.css'
import NewComponent from './NewComponent';
import LoginForm from './LoginForm';
import { Route, Switch } from 'react-router';
import BlogPostList from './BlogPostList';
import BlogPostListContainer from './BlogPostListContainer';
import Header from './Header';
import BlogPostContainer from "./BlogPostContainer";

function App() {
    return (

        <div >
            <Header/>

            <Switch >
                <Route path="/login" component={LoginForm} />
                <Route path="/blog-post/:id"  component={BlogPostContainer} />
                <Route path="/" component={BlogPostListContainer} />

            </Switch>
        </div>
    );
}

export default App;
