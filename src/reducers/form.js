import { fromJS } from 'immutable';
import { SET_FIRSTNAME, SET_LASTNAME, SET_AGE } from '../actions';

const initialState = fromJS({
  lastname: 'Dupont',
  firstname: 'Jean-Pierre',
  age: '46',
  id: 45,
});

const formReducer = (state = initialState, action) => {
  // action: { type: 'SET_FIRSTNAME', value: 'Jean-Paul' }
  switch (action.type) {
    case SET_FIRSTNAME: {
      return state.set('firstname', action.value);
    }
    case SET_LASTNAME: {
      return state.set('lastname', action.value);
    }
    case SET_AGE: {
      return state.set('age', action.value);
    }
    default: {
      return state;
    }
  }
};

export default formReducer;
