import React from 'react'

import { useListParticipant } from '../state/hook/listParticipant'

export const List = () => {
  const list: string[] = useListParticipant()

  return (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
