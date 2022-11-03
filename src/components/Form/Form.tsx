import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../../state/hook/adicionarParticipante'
import { useMensagemDeErro } from '../../state/hook/mensagemErro'
import { Card } from '../Card'

const Form = () => {
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarParticipante = useAdicionarParticipante()
  const mensagemErro = useMensagemDeErro()

  const hasNome = () => {
    return Boolean(nome)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    adicionarParticipante(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insira os nomes dos participantes"
          value={nome}
          ref={inputRef}
          onChange={e => setNome(e.target.value)}
        />
        <button type="submit" disabled={!hasNome()}>
          Adicionar
        </button>
        {mensagemErro && <p role="alert">{mensagemErro}</p>}
      </form>
    </Card>
  )
}

export default Form
