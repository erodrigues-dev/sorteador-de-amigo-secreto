import { sortingFriends } from './sortingFriends'

describe('Sorteador de amigos', () => {
  const participants = ['Ana', 'Catarina', 'Jhon', 'Vinicius']

  it('Não deve sortear o mesmo nome', () => {
    const friends = sortingFriends(participants)

    participants.forEach(participant => {
      const friend = friends.get(participant)
      expect(participant).not.toEqual(friend)
    })
  })
})
