import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import Routers from './router/Routers'
import { useRecoilState } from 'recoil';
import { loginState } from './state/AppAtom';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useRecoilState(loginState);

  useEffect(()=>{
    if(!!localStorage.getItem('login')){
      setInput(JSON.parse(localStorage.getItem('login')))
    }
  },[])

  return (
    <>
      <Routers />
    </>
  )
}

export default App
