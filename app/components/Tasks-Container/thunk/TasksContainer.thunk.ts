import { getCookie, setCookie } from './../../../../database/cookie/CookieHandle';
import { createAsyncThunk } from "@reduxjs/toolkit"


export const getTasks = createAsyncThunk(
    'get-tasks', async (_, {rejectWithValue}) => {
      try {
        const data = await JSON.parse(getCookie('tasks'))
        return  data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
    }
  )
  
