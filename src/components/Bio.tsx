import React from 'react'

class Bio extends React.Component {
  render() {
    return (
      <div className="block_column">
        <div className="block">
          <h2>My bio</h2>
          <p>
            {' '}
            I am fisrt-year bachelor student at Innopolis University. I do not
            have a lot of experience in programming, but I try my best!
          </p>
          <p>
            {' '}
            I was born in Yakutsk, Sakha Republic. I have studied in the most
            basic school for 11 years, and at some point of my life I decided to
            change it, so I dive into IT. Let us see where it gets me :)
          </p>
        </div>
        <div className="block">
          <h2>Stack</h2>
          <p>Java, Python, HTML + CSS + JavaScript </p>
        </div>
      </div>
    )
  }
}

export default Bio
