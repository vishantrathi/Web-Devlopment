import React from 'react'
import About from './About'
import img from './src/img/download.jpeg'

function Home() {
  let message
  return (
    <div className='container'>
        <h1>#Container</h1>
        <header>
            <h1>#banner</h1>
        </header>

        <section>
            <div className='first '>
            <h1>#nav</h1>
            </div>
            <div className='second'>
            <h1>#content</h1>
            </div >
        </section>

        <footer>
            <h1>#footer</h1>
        </footer>
       
        <img src={img} width={500} height={250} />
        <About message = {message}/>
    </div>
  )
}

export default Home