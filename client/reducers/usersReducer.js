import * as types from '../constants/actionTypes';
import { useHistory } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '', 
  password: '',
  confirmedPass: '',
  hasSubmitted: false,
  hasConfirmed: false
};

const usersReducer = (state = initialState, action) => {

  switch(action.type) {
    
    case types.UPDATE_FIRST:

    let firstName = action.payload;

    return {
      ...state,
      firstName
    };

    case types.UPDATE_LAST:

      let lastName = action.payload;

      return {
        ...state,
        lastName
      };

    case types.UPDATE_USERNAME:
        
      let username = action.payload;

      return {
        ...state,
        username
      }

    case types.UPDATE_EMAIL:

      let email = action.payload;

      return {
        ...state,
        email
      };

    case types.UPDATE_PASSWORD:

      let password = action.payload;

      return {
        ...state,
        password
      };

    case types.CONFIRM_PASSWORD:

      let confirmedPass = action.payload;

      return {
        ...state,
        confirmedPass
      }
    
    case types.VERIFY_INPUT:

      if(state.password !== state.confirmedPass) {
        alert('your passwords do not match');
      } else {
        let hasSubmitted = true;
        //fetch request to app.post?
        fetch('/verification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: state.username
          })
        });
        return {
          ...state,
          hasSubmitted
        };
      }

    case types.CORRECT_INFO:
      
      let hasSubmitted = false;

      return {
        ...state,
        hasSubmitted
      }
    
    case types.CREATE_USER:

      let hasConfirmed = true;

      fetch('/confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          password: state.password,
          username: state.username
        })
      });

      return {
        ...state,
        hasConfirmed
      }
      

    default:
      return state;
  }
}

export default usersReducer;