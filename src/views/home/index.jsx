import React, { memo,useEffect,useState} from 'react'
import dwtRequest from '@/services'

const home = memo(() => {
  // 定义状态
  const [highScore, setHighScore]=useState({})
  //网络请求的代码
  useEffect(()=>{
     dwtRequest.get({url:'/home/highscore'}).then(res=>{
      console.log('homeres:',res)
      setHighScore(res)
     })
  },[])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {
          highScore.list?.map((item)=>{
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default home
