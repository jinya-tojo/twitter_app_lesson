import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface USER {
  displayName:string;
  photoUrl:string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {uid:"", photoUrl:"", dislayName:""},
  },
 reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {uid:"", photoUrl:"", dislayName:""};
    },
    updataUserProfile: (state, action:PayloadAction<USER>) => {
      state.user.dislayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { login, logout, updataUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
