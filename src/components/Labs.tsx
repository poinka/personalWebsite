import React from 'react'
import kitten from '../images/kittenTriesProgramming.jpg'

class Labs extends React.Component {
  render() {
    return (
      <div className="block">
        <h2>Front-end Web Development Labs:</h2>
        <ul>
          <li>Lab 1</li>
          <li>Lab 2</li>
          <li>Lab 3</li>
          <li>Lab 4</li>
          <li>Lab 5</li>
          <li>Lab 6</li>
        </ul>

        <div>
          <img alt="kitten_with_laptop" src={kitten} />
        </div>
      </div>
    )
  }
}
export default Labs
