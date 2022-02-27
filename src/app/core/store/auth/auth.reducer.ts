import { createReducer, on } from '@ngrx/store';
import { deleteTokenUserModel, setTokenUserModel } from './auth.actions';

import { TokenUserModel } from '../../models/tokenUserModel';

export interface AuthState {
  tokenUserModel?: TokenUserModel;
}

const initialAuthState: AuthState = {
  tokenUserModel: undefined
};

export const AuthReducer = createReducer(
  initialAuthState,
  on(setTokenUserModel, (state: AuthState, { tokenUserModel }) => ({
    ...state,
    tokenUserModel
  })),
  on(deleteTokenUserModel, (state: AuthState) => ({
    ...state,
    tokenUserModel: undefined
  }))
);
