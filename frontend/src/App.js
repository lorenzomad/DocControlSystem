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
    
    console.log(documentDiff.diff)
    const diffvisualizer = documentDiff.diff.map(part => 
      // green for additions, red for deletions
      // grey for common parts
      part.added ? <span className='added'> {part.value} </span> :
        part.removed ? <span className='removed'> {part.value} </span> : 
          <span> {part.value}</span>
    )

    setDiff(diffvisualizer)

  }


  return (
    <div>
      <div className='upload'>
        <div className='document'>
          <Uploader title='File 1' uploadFunction = {uploadDocument1}/>
          {document1 ? <p>{document1.name}</p> : ''}
        </div>
        <div className='document'>
          <Uploader title='File 2' uploadFunction = {uploadDocument2}/>
          {document2 ? <p>{document2.name}</p> : ''}
        </div>
      </div>

      <button onClick={() => generateDiff(document1, document2)}> Generate diff</button>

      { diff !== null ? <div>{diff}</div> : ''}
      
    </div>
  );
}

export default App;
