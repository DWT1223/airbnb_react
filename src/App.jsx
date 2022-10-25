import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>
        header
      </div>
      <div>
        {useRoutes(routes)}
      </div>
      <div className='footers'>
        footers
      </div>
    </div>
  )
})

export default App
