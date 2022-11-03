import React from 'react'

import './styles.css'

interface Props {
  children: React.ReactNode
}

export const Card: React.FC<Props> = props => (
  <div className="card">{props.children}</div>
)
