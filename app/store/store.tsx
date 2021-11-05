import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../app-state/AppSlice'
import tasksContainerReducer from '../components/Tasks-Container/state-slice/TasksContainer.slice'
import tasksAddReducer from '../components/Tasks-Add/state-slice/TasksAdd.slice'

const reducer = 
{  
  appReducer: appReducer, 
  tasksContainerReducer:tasksContainerReducer,
  tasksAddReducer:tasksAddReducer
}



export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


