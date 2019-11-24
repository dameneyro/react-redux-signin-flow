import * as types from '../constants/actionTypes'

export const updateFirstName = (firstName) => ({
  type: types.UPDATE_FIRST,
  payload: firstName
});

export const updateLastName = (lastName) => ({
  type: types.UPDATE_LAST,
  payload: lastName
});

export const updateUsername = (username) => ({
  type: types.UPDATE_USERNAME,
  payload: username
});

export const updateEmail = (email) => ({
  type: types.UPDATE_EMAIL,
  payload: email
});

export const updatePassword = (password) => ({
  type: types.UPDATE_PASSWORD,
  payload: password
});

export const confirmPassword = (password) => ({
  type: types.CONFIRM_PASSWORD,
  payload: password
});

export const verifyInput = () => ({
  type: types.VERIFY_INPUT
});

export const createUser = () => ({
  type: types.CREATE_USER
});

export const correctInfo = () => ({
  type: types.CORRECT_INFO
})
