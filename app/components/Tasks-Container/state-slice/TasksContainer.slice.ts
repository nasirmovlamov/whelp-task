import { setCookie } from './../../../../database/cookie/CookieHandle';
import { RootState } from './../../../store/store';
import { TASKS_CONTAINER_STATE } from './../state/TasksContainer.state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTasks } from '../thunk/TasksContainer.thunk';
import { autoSuccessToaster } from '../../../../helpers/toaster/AutoSuccessToast';
import { autoErrorToaster } from '../../../../helpers/toaster/AutoErrorToaster';




export const TASKS_CONTAINER_SLICE = createSlice({
  name: 'TASKS_CONTAINER_SLICE',
  initialState: TASKS_CONTAINER_STATE,
  reducers: {

      addTask(state, _){
        state.tasks.push({
          task_id: Date.now(),
          task_content: state.task_add.task_value,
          task_status:'on-board',
          task_created_at:Date.now(),
          isEditEnabled:false
        })
        autoSuccessToaster('Task added successfully!')
        setCookie('tasks' , JSON.stringify(state.tasks) , 14)
      },
      deleteTask(state,action){
        state.tasks = state.tasks.filter(task => task.task_id !== action.payload.id)
        setCookie('tasks' , JSON.stringify(state.tasks) , 14)
        autoErrorToaster('Task deleted successfully!')
      },
      completeTask(state,action){
        state.tasks.filter(task => task.task_id === action.payload.id)[0].task_status = 'completed'
        autoSuccessToaster('Task completed successfully!')
        setCookie('tasks' , JSON.stringify(state.tasks) , 14)
      },
      enableEditing(state,action){
        state.tasks.filter(task => task.task_id === action.payload.id)[0].isEditEnabled = true
        setCookie('tasks' , JSON.stringify(state.tasks) , 14)
      },
      disableEditing(state,action){
        state.tasks.filter(task => task.task_id === action.payload.id)[0].isEditEnabled = false
      },
      editTask(state,action){
        state.tasks.filter(task => task.task_id === action.payload.id)[0].task_content = action.payload.task_content
        setCookie('tasks' , JSON.stringify(state.tasks) , 14)
      },

      selectSortingType(state,action){
        state.sorting_type = action.payload
      },

      fieldActiveSwithcer(state, {payload}){
        state.task_add.field_active = !payload.field_active;
      },
      fieldOnChage(state, {payload}){
        state.task_add.task_value = payload.task_value;
      }

  },



  extraReducers: (builder) => {
      builder.addCase(getTasks.fulfilled, (state, {payload}) => {
        if(payload)
        {
          state.tasks = payload;
        }else 
        {
          state.tasks = [];
        }
        state.status = 'idle'
      }),
      builder.addCase(getTasks.pending, (state, {payload}) => {
        state.tasks = []
        state.status = 'loading'
      }),
      builder.addCase(getTasks.rejected, (state, {payload}) => {
        state.tasks = []
        state.status = 'idle'
      }) 



     
  }
})


// action
export const {
  addTask,
  deleteTask,
  completeTask,
  fieldActiveSwithcer,
  fieldOnChage,
  enableEditing,
  disableEditing,
  editTask,
  selectSortingType
} = TASKS_CONTAINER_SLICE.actions


// data
export const field_value = (state: RootState) => state.tasksContainerReducer.task_add.task_value
export const field_active = (state: RootState) => state.tasksContainerReducer.task_add.field_active
export const sorting_type = (state: RootState) => state.tasksContainerReducer.sorting_type

export const all_tasks = (state: RootState) => state.tasksContainerReducer.tasks
export const completed_tasks = (state: RootState) => state.tasksContainerReducer.tasks.filter(task => task.task_status === 'completed')
export const onboard_tasks = (state: RootState) => state.tasksContainerReducer.tasks.filter(task => task.task_status === 'on-board')




export default TASKS_CONTAINER_SLICE.reducer;




