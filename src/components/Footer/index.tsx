import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useListParticipants } from '../../state/hook/useListParticipants'
import { useSortingFriends } from '../../state/hook/useSortingFriends'

import './styles.css'

export const Footer = () => {
  const list = useListParticipants()
  const sortingFriends = useSortingFriends()
  const navigate = useNavigate()

  const handleClick = () => {
    sortingFriends()
    navigate('/sorteio')
  }

  return (
    <footer className="footer">
      <button
        className="button"
        disabled={list.length < 3}
        onClick={handleClick}
      >
        Iniciar
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}
