import React from 'react'
import axios from 'axios'

interface IComic {
  safe_title: string
  img: string
  alt: string
  year: number
  month: number
  day: number
}

class Comic extends React.Component {
  state = {
    comic: null as IComic | null,
  }

  componentDidMount() {
    this.fetchComic()
  }

  fetchComic = async () => {
    const email: string = 'p.korobeinikova@innopolis.university'
    const emailParam: URLSearchParams = new URLSearchParams({ email })
    const urlId: string = `https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`
    axios.get(urlId).then((comicId) => {
      console.log('First api request:', comicId)
      const url: string = `https://fwd.innopolis.university/api/comic?id=${comicId.data}`

      axios.get(url).then((data) => {
        console.log('Second api request:', data)

        this.setState({ comic: data.data })
      })
    })
  }

  render() {
    const { comic } = this.state

    if (!comic) {
      return <div>Loading...</div>
    }
    const date = new Date(comic.year, comic.month - 1, comic.day)
    return (
      <div className="block">
        <h2>Title: {comic.safe_title}</h2>
        <img src={comic.img} alt={comic.alt}></img>
        <h2>Date: {date.toLocaleDateString()}</h2>
      </div>
    )
  }
}

export default Comic
