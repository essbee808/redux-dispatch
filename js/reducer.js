let state = {count: 0};

// reducer
function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

// persist changes to our state
function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  document.body.textContent = state.count;
}

let action = {type: 'INCREASE_COUNT'}

dispatch({type: "INCREASE_COUNT"});
dispatch({type: "INCREASE_COUNT"});
dispatch({type: "INCREASE_COUNT"});

render();