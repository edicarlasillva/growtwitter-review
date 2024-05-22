import {createBrowserRouter} from 'react-router-dom'

import { RepositoriesList } from '../pages/RepositoriesList'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RepositoriesList />
  }
])