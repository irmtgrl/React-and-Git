import './App.css'
import { useState } from 'react'

function App() {
  const [cuteStuff, setCuteStuff] = useState([])
  const displayThings = cuteStuff.map(thing =>  <li key={thing}>{thing}</li>)

  function addThings(formData) {
    const newItem = formData.get("textInput")
    setCuteStuff(prevThings => [...prevThings, newItem])
    
  }

return (
  <main>
    <section>
      <h2>Things I Find Cute</h2>
      <form action={addThings} className="input-cnt">
        <input type="text" name="textInput" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {displayThings}
      </ul>
    </section>
  </main>
)
}

export default App
