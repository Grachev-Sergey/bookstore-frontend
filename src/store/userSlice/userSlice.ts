import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import userThunks from './userThunks';
import type {
  UserObjectType,
  UserType,
  UserLoginType,
  ChangeInfoType,
  ChangePassType,
  UploadPhotoType,
} from '../../utils/types/userTypes';
import type { UserFavoriteType, DeletedFavoriteType } from '../../utils/types/favoriteType';
import type { UserCartType, DeletedCartItemType } from '../../utils/types/cartTypes';

const initialState: UserObjectType = {
  user: {
    id: '',
    email: '',
    fullName: '',
    avatar: '',
    rating: [],
    favorite: [],
    cart: [],
  },
};

const fillingState = (state: UserObjectType, action: PayloadAction<UserType | undefined, string, {
  arg: UserLoginType | void | ChangeInfoType | ChangePassType | UploadPhotoType;
  requestId: string;
  requestStatus: 'fulfilled';
}, never>) => {
  if (!action.payload) return;
  state.user = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<UserFavoriteType>) => {
      state.user?.favorite?.push(action.payload);
    },

    removeFromFavorites: (state, action: PayloadAction<DeletedFavoriteType>) => {
      if (state.user?.favorite) {
        state.user.favorite = state.user?.favorite?.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },

    addToCart: (state, action: PayloadAction<UserCartType>) => {
      state.user?.cart?.push(action.payload);
    },

    removeFromCart: (state, action: PayloadAction<DeletedCartItemType>) => {
      if (state.user?.cart) {
        state.user.cart = state.user?.cart?.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunks.signUpUser.fulfilled, fillingState);
    builder.addCase(userThunks.logInUser.fulfilled, fillingState);
    builder.addCase(userThunks.checkUser.fulfilled, fillingState);
    builder.addCase(userThunks.changeUserInfo.fulfilled, fillingState);
    builder.addCase(userThunks.changeUserPass.fulfilled, fillingState);
    builder.addCase(userThunks.uploadPhoto.fulfilled, fillingState);
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  addToCart,
  removeFromCart,
} = userSlice.actions;

export default userSlice.reducer;
