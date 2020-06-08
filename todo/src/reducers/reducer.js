import React from 'react';

export let initialState = {
    list: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about actions',
            completed: false,
            id: 9789868786
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            };
            return {
                ...state,
                list: [...state.list, newTodo]
            };

        default:
            return state;
    }

};
