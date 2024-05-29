/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
import React from 'react';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, user: action.payload };
        case 'FETCH_FAILURE':
            return { ...state, loading: false, error: action.error };
        default:
            return state;  // Do not throw an error, just return current state
    }
};

const useGithub = ( username ) =>
{
    const [ state, dispatch ] = React.useReducer( reducer, initialState );

    React.useDebugValue( `Fetching data for ${username}` );
    React.useDebugValue(
        state.error
            ? `There is an error fetching the data for ${username}`
            : `No Error fetching the data for ${username}`
    );
    React.useDebugValue( state.user, ( user ) => user?.bio || "No Bio" );

    React.useEffect( () =>
    {
        const fetchData = async () =>
        {
            dispatch( { type: 'FETCH_INIT' } );
            try
            {
                const response = await fetch( `https://api.github.com/users/${username}` );
                const responseData = await response.json();
                dispatch( { type: 'FETCH_SUCCESS', payload: responseData } );
                console.log( responseData );
            } catch ( error )
            {
                dispatch( { type: 'FETCH_FAILURE', error } );
            }
        };

        fetchData();
    }, [ username ] );

    return state;
};

export default useGithub;
