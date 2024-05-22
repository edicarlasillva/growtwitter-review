import axios from "axios";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Repository {
  id: number
  name: string
}

interface RepositoriesState {
  repositories: Repository[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: RepositoriesState = {
  repositories: [],
  status: 'idle', // parado
  error: null
}

export const fetchRepositories = createAsyncThunk(
  'repositories/fetchRepositories',
  async (username: string) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`)

    return response.data
  }
)

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchRepositories.fulfilled, (state, action: PayloadAction<Repository[]>) => {
      state.status = 'succeeded'
      state.repositories = action.payload
    })
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message || null
    })
  }
})

// export const {createRepository} = repositoriesSlice.actions
export default repositoriesSlice.reducer