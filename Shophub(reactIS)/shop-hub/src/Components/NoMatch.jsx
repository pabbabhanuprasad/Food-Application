import React from 'react';
import {Link} from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <h2>Hello From NoMatch Component</h2>
            <p>
                <Link to="/">Go to the Home Page</Link>
            </p>
        </div>
    )
};
export default NoMatch;