import React from 'react'
import mainphoto from './images/mainPhoto.png'
import Comic from './components/Comic.tsx'
import Links from './components/Links.tsx'
import Bio from './components/Bio.tsx'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Hello! I am Polina &lt;3</h1>
        <div className="block_line">
          <div className="block_column">
            <img src={mainphoto} alt="Main" />
            <Links />
          </div>
          <Bio />
          <Comic />
        </div>
      </div>
    )
  }
}
export default MainPage
