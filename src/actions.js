export const SET_FIRSTNAME = 'SET_FIRSTNAME';
export const SET_LASTNAME = 'SET_LASTNAME';
export const SET_AGE = 'SET_AGE';

export const setFirstname = firstname => ({ type: SET_FIRSTNAME, value: firstname });
export const setLastname = lastname => ({ type: SET_LASTNAME, value: lastname });
export const setAge = age => ({ type: SET_AGE, value: age });
