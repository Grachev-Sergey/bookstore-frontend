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
import type { UserRatingType } from '../../utils/types/ratingType';

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

    changeRating: (state, action: PayloadAction<UserRatingType>) => {
      if (state.user?.rating) {
        const isRated:boolean[] = [];
        state.user.rating.forEach((item) => {
          if (item.id === action.payload.id) {
            // eslint-disable-next-line no-param-reassign
            item.rating = action.payload.rating;
            isRated.push(true);
          }
        });
        if (!isRated.includes(true)) {
          state.user.rating.push(action.payload);
        }
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
  changeRating,
} = userSlice.actions;

export default userSlice.reducer;
