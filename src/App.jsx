import './App.css'
import React from 'react'

function App() {
  const [cuteStuff, setCuteStuff] = React.useState([])

  const thingsIFindCute = ["Cats", "Happiness", "Books", "Wine"]
  const displayThings = cuteStuff.map(thing => thing ? <li key={thing}>{thing}</li> : <p>That was it:(</p>)

  function revealThings() {
    setCuteStuff(prevThing => [...prevThing, thingsIFindCute[cuteStuff.length]])
  }

return (
  <main>
    <section>
      <h2>Things I Find Cute</h2>
      <button onClick={revealThings}>Reveal</button>
      <ul>
        {displayThings}
      </ul>
    </section>
  </main>
)
}

export default App
