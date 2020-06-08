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
            return {
                ...state,
                list: [...state.list,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now(),
                    }
                ]
            };
        case "COMPLETE_TODO":
              return {
                ...state,
                list: state.list.map(todo => {
                    if (todo.id === action.payload) {
                      return { ...todo, completed: !todo.completed };
                    } else {
                      return todo;
                    }
                  })
              };
        default:
            return state;
    }

};
