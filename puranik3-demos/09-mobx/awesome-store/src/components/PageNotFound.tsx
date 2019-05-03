import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div className="container">
        <div className="jumbotron">
            <h1>Page Not Found</h1>
            <hr />
            <p>
                Oops! You hit a dead end. Might wanna <Link to="/">go home</Link>?
            </p>
        </div>
    </div>
);

export default PageNotFound;