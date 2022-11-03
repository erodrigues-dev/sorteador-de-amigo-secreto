import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useListParticipants } from '../../state/hook/listParticipants'

import './styles.css'

export const Footer = () => {
  const list = useListParticipants()
  const navigate = useNavigate()

  const handleClick = () => {
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
