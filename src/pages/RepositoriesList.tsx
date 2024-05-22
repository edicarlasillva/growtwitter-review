import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { fetchRepositories } from "../store/slices/repositoriesSlice"

export function RepositoriesList() {
  const dispatch = useAppDispatch()
  
  const {repositories, status, error} = useAppSelector(state => state.repositories)

  useEffect(() => {
    dispatch(fetchRepositories('edicarlasillva'))
  }, [dispatch])

  return (
    <>
      <h1>Repositórios do Github</h1>

      {status === 'loading' && <p>Carregando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      <ul>
        {repositories.map((repository) => (
          <li key={repository.id}>{repository.name}</li>
        ))}
      </ul>
    </>
  )
}