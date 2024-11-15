import { configureStore } from "@reduxjs/toolkit";
import genesetsReducer from "./reducers/genesetsReducer";

const store = configureStore({
    reducer: {
        genesetsReducer
      },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;