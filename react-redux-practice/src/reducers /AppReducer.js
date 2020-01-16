const paintings = [
  {
    id: '59bd5a2acb4c274d74388a33',
    collecting_institution: '',
    date: '1665â€“1667',
    dimensions: {
      text: '44 3/8 Ã— 34 1/2 in',
      height: 44.375,
      width: 34.5,
      depth: null,
      diameter: null
    },
    slug: 'rembrandt-van-rijn-portrait-of-gerard-de-lairesse',
    title: 'Portrait of Gerard de Lairesse',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/6b4QduWxeA1kSnrifgm2Zw/medium.jpg',
    artist: {
      name: 'Rembrandt van Rijn',
      hometown: 'Leiden, Netherlands',
      birthday: '1606',
      deathday: '1669'
    },
    votes: 30
  },
  {
    id: '59bd59ee9c18db5297a32338',
    collecting_institution: '',
    date: '1600â€“1626',
    dimensions: {
      text: '10 7/16 Ã— 6 15/16 in',
      height: 10.4375,
      width: 6.9375,
      depth: null,
      diameter: null
    },
    slug: 'peter-paul-rubens-bust-of-pseudo-seneca',
    title: 'Bust of Pseudo-Seneca',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/RcoWk2PHQq6yqX7dpSyt-g/medium.jpg',
    artist: {
      name: 'Peter Paul Rubens',
      hometown: 'Siegen, Westphalia',
      birthday: '1577',
      deathday: '1640'
    },
    votes: 96
  },
  {
    id: '59bd59eba09a672fdae25803',
    collecting_institution: '',
    date: '1449',
    dimensions: {
      text: '39 3/8 Ã— 33 3/4 in',
      height: 39.375,
      width: 33.75,
      depth: null,
      diameter: null
    },
    slug: 'petrus-christus-a-goldsmith-in-his-shop',
    title: 'A Goldsmith in his Shop',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/0-QXL43Ox2QgwqkYoCjAjg/medium.jpg',
    artist: {
      name: 'Petrus Christus',
      hometown: 'Baarle-Hertog, Belgium',
      birthday: '1410',
      deathday: '1475'
    },
    votes: 80
  },
  {
    id: '59bd59dda09a672f268ace8a',
    collecting_institution: '',
    date: 'ca. 1635',
    dimensions: {
      text: '80 1/4 Ã— 62 1/4 in',
      height: 80.25,
      width: 62.25,
      depth: null,
      diameter: null
    },
    slug:
      'peter-paul-rubens-rubens-his-wife-helena-fourment-1614-1673-and-their-son-frans-1633-1678',
    title:
      'Rubens, His Wife Helena Fourment (1614â€“1673), and Their Son Frans (1633â€“1678)',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/miBYVNx3iV4AtBWgierQrg/medium.jpg',
    artist: {
      name: 'Peter Paul Rubens',
      hometown: 'Siegen, Westphalia',
      birthday: '1577',
      deathday: '1640'
    },
    votes: 47
  },
  {
    id: '59bd59dc7622dd4d72211a0a',
    collecting_institution: '',
    date: '1653',
    dimensions: {
      text: '56 1/2 Ã— 53 3/4 in',
      height: 56.5,
      width: 53.75,
      depth: null,
      diameter: null
    },
    slug: 'rembrandt-van-rijn-aristotle-with-a-bust-of-homer',
    title: 'Aristotle with a Bust of Homer',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/q5OTabe7_Bu8kfxzK_UUag/medium.jpg',
    artist: {
      name: 'Rembrandt van Rijn',
      hometown: 'Leiden, Netherlands',
      birthday: '1606',
      deathday: '1669'
    },
    votes: 46
  },
  {
    id: '59bd59dc139b214a3672abe5',
    collecting_institution: '',
    date: 'ca. 1662',
    dimensions: {
      text: '18 Ã— 16 in',
      height: 18,
      width: 16,
      depth: null,
      diameter: null
    },
    slug: 'johannes-vermeer-young-woman-with-a-water-pitcher',
    title: 'Young Woman with a Water Pitcher',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/pdRjIGw58ecojporcDG0_w/medium.jpg',
    artist: {
      name: 'Johannes Vermeer',
      hometown: 'Delft, Netherlands',
      birthday: '1632',
      deathday: '1675'
    },
    votes: 95
  },
  {
    id: '59bd59db139b2149937fce24',
    collecting_institution: '',
    date: '1660',
    dimensions: {
      text: '31 5/8 Ã— 26 1/2 in',
      height: 31.625,
      width: 26.5,
      depth: null,
      diameter: null
    },
    slug: 'rembrandt-van-rijn-self-portrait-1661',
    title: 'Self-Portrait',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/7EthRD-B57oEJovV77WH0Q/medium.jpg',
    artist: {
      name: 'Rembrandt van Rijn',
      hometown: 'Leiden, Netherlands',
      birthday: '1606',
      deathday: '1669'
    },
    votes: 41
  }
]

const upvote = id => {
  const painting = paintings.find(paint => paint.id === id)
  painting.votes++
  // do I need the return? lets find out
  return painting
}

const downvote = id => {
  const painting = paintings.find(paint => paint.id === id)
  painting.votes--
  // do I need the return? lets find out
  return painting
}

const deletePainting = id => {
  const newPaintings = paintings.filter(paint => paint.id !== id)
  // do I need the return? lets find out
  return newPaintings
}

export default (state = paintings, action) => {
  switch (action.type) {
    case UPVOTE:
      return upvote(state)
    case DOWNVOTE:
      return downvote(state)
    // case DELETE:
    //   return deletePainting(state)
    default:
      return state
  }
}
