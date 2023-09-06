import './App.css';
import Uploader from './components/Uploader.js'
import { useState } from 'react';


const formData = require('form-data')
const backend_URL = 'https://miniature-garbanzo-rqgrxqrvpvjcpqp-4000.app.github.dev/'


function App() {
  const [document1, setDocument1] = useState()
  const [document2, setDocument2] = useState()
  const [diff, setDiff] = useState(null)

  const uploadDocument1 = (document) => {
    setDocument1(document)
  }

  const uploadDocument2 = (document) => {
    setDocument2(document)
  }

  const generateDiff = async (doc1, doc2) => {

    const fd = new formData()

    fd.append('files[]', document1)
    fd.append('files[]', document2)


    const response = await fetch(
      backend_URL + 'diff',
      {method:'POST', body:fd, headers: {...fd.getHeaders}}
    )
    const documentDiff =  await response.json()
    
    console.log(documentDiff)
    setDiff(documentDiff)

  }


  return (
    <div>
      <div className='upload-container'>
        <Uploader title='File 1' uploadFunction = {uploadDocument1}/>
        <Uploader title='File 2' uploadFunction = {uploadDocument2}/>
      </div>

      <button onClick={() => generateDiff(document1, document2)}> Generate diff</button>

      { diff !== null ? <p>{diff.diff}</p> : ''}
      
    </div>
  );
}

export default App;
