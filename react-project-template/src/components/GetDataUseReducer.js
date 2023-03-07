import React, { useEffect, useReducer, useState } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {}
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.result,
                error: ''
            };
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'There was a some problem occured!!'
            };
        default:
            return state;
    }
};

const GetDataUseReducer = () => {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');
    // const [post, setPost] = useState({});

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/2')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'SUCCESS', result: data });
            })
            .catch(() => {
                dispatch({ type: 'ERROR' });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error || null}
        </div>
    );
};

export default GetDataUseReducer;
