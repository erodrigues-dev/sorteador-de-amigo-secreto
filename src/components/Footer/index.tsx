import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useListParticipants } from '../../state/hook/listParticipants'

export const Footer = () => {
  const list = useListParticipants()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/sorteio')
  }

  return (
    <button disabled={list.length < 3} onClick={handleClick}>
      Iniciar
    </button>
  )
}
