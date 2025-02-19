import { createReducer } from 'redux-create-reducer';
import { SET_USER, DROP_USER } from '../actions/user';
import { AnyAction } from 'redux';

export interface IUser {
  name?: string;
  lastname?: string;
  email?: string;
}


const initialState: IUser = {
};

export const getUser = (state: {user: IUser}): IUser => state.user;

export default createReducer(initialState, {
  [SET_USER]: (state: IUser, { payload }: AnyAction) => payload,
  [DROP_USER]: () => initialState,
});
