import { useState } from 'react'
import { useListParticipants } from '../../state/hook/useListParticipants'
import { useFriends } from '../../state/hook/useFriends'
import { Card } from '../../components/Card'

import './Result.css'

export const Result = () => {
  const list = useListParticipants()
  const friends = useFriends()

  const [name, setName] = useState(list[0])
  const [friend, setFriend] = useState('')

  const handleSort = (e: any) => {
    e.preventDefault()
    setFriend(friends.get(name)!)
  }

  return (
    <Card>
      <section className="sorting">
        <h2>Quam vai tirar o papelzinho?</h2>
        <form onSubmit={handleSort}>
          <select
            placeholder="Selecione o seu nome"
            value={name}
            onChange={e => {
              setName(e.target.value)
              setFriend('')
            }}
            required
          >
            {list.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p>Clique em sortear para ver quem é o seu amigo secreto!</p>
          <button className="button-sort">Sortear</button>
        </form>
        {friend && (
          <p role="alert" className="result">
            {friend}
          </p>
        )}
        <footer className="sorting">
          <img
            src="/imagens/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  )
}
