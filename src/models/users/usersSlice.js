import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../api";

const initialState = {
  reviews: [],
  currentShop: -1,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setReview(state, { payload }) {
      const {
        owner,
        id_shop,
        stars,
        comment,
        LikeDislikes,
        comments
      } = payload;
      state.reviews.push({
        owner: owner,
        id_shop: id_shop,
        stars: stars,
        comment: comment,
        LikeDislikes: LikeDislikes,
        comments: comments
      });
    },
    setCurrentShop(state, { payload }) {
      const { id_shop } = payload;
      state.currentShop = id_shop;
    },
    clearReviews(state) {
      state.reviews = [];
      state.commentReview = [];
    },
  },
});

export const createReviewThunk = createAsyncThunk(
  "user/createReviewThunk",
  async ({ owner, id_shop, stars, comment }, { dispatch }) => {
    console.log(owner, id_shop, stars, comment);
    const response = await usersApi.createReview(
      owner,
      id_shop,
      stars,
      comment
    );
    if (response) {
      dispatch(
        slice.actions.setReview({
          owner: owner,
          id_shop: id_shop,
          stars: stars,
          comment: comment,
          LikeDislikes:[],
          comments:[],
          countLike:0,
          countDislike:0
        })
      );
    }
  }
);

export const getReviewsThunk = createAsyncThunk(
  "user/getReviewsThunk",
  async ({ id_shop }, { dispatch }) => {
    console.log(id_shop);
    const response = await usersApi.getReviewOnShop(id_shop);
    console.log(response);
    if (response) {
      dispatch(slice.actions.clearReviews());
      for (let item of response) {
        console.log(item);
        dispatch(
          slice.actions.setReview({
            owner: item.owner,
            id_shop: id_shop,
            stars: item.stars,
            comment: item.comment,
            LikeDislikes: item.LikeDislikes,
            comments: item.comments
          })
        );
      }
    }
  }
);
export const createCommentThunk = createAsyncThunk(
  "user/createCommentThunk",
  async ({ owner, id_shop, id_review, comment }, { dispatch }) => {
    console.log(owner, id_shop, id_review, comment);
    const response = await usersApi.createComment(
      owner,
      id_shop,
      id_review,
      comment
    );
    if (response) {
      console.log(id_shop);
      dispatch(getReviewsThunk({ id_shop: id_shop }));
    }
  }
);


export const leaveLikeDislikeOnReviewThunk = createAsyncThunk(
  "user/leaveLikeDislikeOnReviewThunk",
  async ({ owner, id_shop, id_review, rate }, { dispatch }) => {
    console.log(owner, id_shop, id_review, rate);
    const response = await usersApi.leaveLikeDislikeOnRewiev(
      owner,
      id_shop,
      id_review,
      rate
    );
    if (response) {
      // const user = await usersApi.getReviewOnShop(id_shop);
      dispatch(getReviewsThunk({ id_shop: id_shop }));
    }
  }
);
export const leaveLikeDislikeOnCommentThunk = createAsyncThunk(
  "user/leaveLikeDislikeOnCommentThunk",
  async ({ owner, id_shop, id_review, id_comment, rate }, { dispatch }) => {
    console.log(owner, id_shop, id_review, id_comment, rate);
    const response = await usersApi.leaveLikeDislikeOnComment(
      owner,
      id_shop,
      id_review,
      id_comment,
      rate
    );
    if (response) {
      dispatch(getReviewsThunk({ id_shop: id_shop }));
    }
  }
);

export const { reducer: userReducer } = slice;
export const { actions: userActions } = slice;
