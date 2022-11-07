import shuffle from 'just-shuffle'

export const sortingFriends = (list: string[]) => {
  const total = list.length
  const listShuffled = shuffle(list)
  const friends = new Map<string, string>()

  for (let i = 0; i < total; i++) {
    const isLast = total - 1 === i
    const friendIndex = isLast ? 0 : i + 1

    const name = listShuffled[i]
    const friend = listShuffled[friendIndex]

    friends.set(name, friend)
  }

  return friends
}
