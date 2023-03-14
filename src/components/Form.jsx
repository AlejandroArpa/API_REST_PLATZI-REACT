import React from 'react'

function Form() {
  return (
    <section>
      <h1>Sube un perrito :)</h1>
      <form >
        <input id="file" type="file" name="file"/>
        <button type='button' >Subir perrito</button>
      </form>
    </section>
  )
}

export default Form