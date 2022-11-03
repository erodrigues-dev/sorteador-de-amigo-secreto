import React from 'react'

import { useListParticipants } from '../../state/hook/listParticipants'

export const List = () => {
  const list: string[] = useListParticipants()

  return (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
