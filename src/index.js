import React from 'react'
import ReactDOM from 'react-dom'

/* function tick(){
    ReactDOM.render(
        <div>
          <h1>Hello, world!</h1>
          <h2>It is { new Date().toLocaleTimeString() }.</h2>
        </div>,
        document.getElementById('app')
    )
}

setInterval(tick,1000) */



function Welcome(props){
    console.log(props)
    return <h1>hello,{props.name}</h1>
}

function App(){
    return <div>
        <Welcome name='小柏' />
        <Welcome name='小样' />
        <Welcome name='小孔' />
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)