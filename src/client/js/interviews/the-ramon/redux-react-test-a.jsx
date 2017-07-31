// Individual Reducer
const todoReducer = (state, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      id: action.id,
      text: action.text,
      completed: false
    };
  case 'TOGGLE_TODO':
    if (state.id != action.id) return state;

      // This not working
      /*
      return {
        ...state,
        completed: !state.completed
      };
      */

      //This works
    return Object.assign({}, state, {
      completed: !state.completed
    });

    //This also works
    //var newState = {id: state.id, text: state.text, completed: !state.completed};
    //return newState;
  default:
    return state;
  }
};

// Composed Reducer. That delegates to other reducers.
const todos = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [...state, todoReducer(null, action)];
  case 'TOGGLE_TODO':
    return state.map(t => todoReducer(t, action));
  default:
    'SET_VISIBILITY_FILTER';
    return state;
  }
};

// Reducer
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
    return action.filter;
  default:
    return state;
  }
};

const { combineReducers } = Redux;
const { createStore } = Redux;

//Combined Reducer
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

//Store
const store = createStore(todoApp);

// Individual Reducer
const getVisibleTodosReducer = (todos, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return todos;
  case 'SHOW_COMPLETED':
    return todos.filter(t => t.completed);
  case 'SHOW_ACTIVE':
    return todos.filter(t => !t.completed);
  }
};

const { Component } = React;
let nextTodoId = 0;
const TodoApp = React.createClass({
  render() {
    const visibleTodos = getVisibleTodosReducer(
      this.props.todos,
      this.props.visibilityFilter
    );

    return (
        <div>
            <input
                ref={node => {
                  this.input = node;
                }}
            />
            <button
                onClick={() => {
                  if (!this.input.value || this.input.value.length == 0) return;

                  store.dispatch({
                    type: 'ADD_TODO',
                    text: this.input.value,
                    id: nextTodoId++
                  });

                  this.input.value = '';
                }}
            >
          Add
        </button>

            <ul>
                {visibleTodos.map(todo =>
                    <li
                        key={todo.id}
                        onClick={() => {
                          store.dispatch({
                            type: 'TOGGLE_TODO',
                            id: todo.id
                          });
                        }}
                        style={{
                          textDecoration: todo.completed ? 'line-through' : 'none'
                        }}
                    >
                        {todo.text}
                    </li>
          )}
            </ul>

            <p>
          Show: <FilterLink filter="SHOW_ALL">All</FilterLink>{' '}
                <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{' '}
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </p>
        </div>
    );
  }
});

const FilterLink = ({ filter, children }) => {
  return (
      <a
          href="#"
          onClick={e => {
            e.preventDefault();
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            });
          }}
      >
          {children}
      </a>
  );
};

const render = () => {
  ReactDOM.render(
      <TodoApp {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
