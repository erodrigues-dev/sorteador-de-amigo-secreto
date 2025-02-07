import React, { useRef, useState } from 'react'

import { useAddParticipant } from '../../state/hook/useAddParticipant'
import { useMessageError } from '../../state/hook/useMessageError'

import { Card } from '../Card'

import './styles.css'

const Form = () => {
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarParticipante = useAddParticipant()
  const mensagemErro = useMessageError()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    adicionarParticipante(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="input-group-btn">
          <input
            type="text"
            placeholder="Insira os nomes dos participantes"
            value={nome}
            ref={inputRef}
            onChange={e => setNome(e.target.value)}
          />
          <button type="submit" disabled={!nome}>
            Adicionar
          </button>
        </div>
        {mensagemErro && (
          <p className="alert error" role="alert">
            {mensagemErro}
          </p>
        )}
      </form>
    </Card>
  )
}

export default Form
