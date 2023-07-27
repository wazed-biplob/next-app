import React from 'react';

const SingleBlog = ({params}) => {
    const [year, id] = params.segments || [];
    console.log('params', params.segments)
    return (
        <div>
            {year || new Date().getFullYear()} and {id}
        </div>
    );
};

export default SingleBlog;