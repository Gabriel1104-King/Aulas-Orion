import React from 'react'
import { useParams } from 'react-router-dom'

const FilmesDetalhes = () => {
    const params = useParams()

  return (
    <div>FilmesDetalhes: {params.id}</div>
  )
}

export default FilmesDetalhes