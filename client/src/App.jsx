import './app.scss'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar'

function App() {

  const loader = useRef(null)

  return (
    <div className="App">
      <LoadingBar color='#00cfc8' ref={loader} />
      <Header/>
      <Form loader={loader}/>
      <Footer/>
    </div>
  )
}

export default App
