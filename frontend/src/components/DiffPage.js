import Uploader from './Uploader.js'
import { useState } from 'react';


const formData = require('form-data')
const backend_URL = 'https://miniature-garbanzo-rqgrxqrvpvjcpqp-4000.app.github.dev/'


function DiffPage() {
  const [document1, setDocument1] = useState()
  const [document2, setDocument2] = useState()
  const [diff, setDiff] = useState(null)

  const uploadDocument1 = (document) => {
    setDocument1(document)
  }

  const uploadDocument2 = (document) => {
    setDocument2(document)
  }

  const getDiff = async (doc1, doc2) => {

    const fd = new formData()

    fd.append('files[]', document1)
    fd.append('files[]', document2)


    const response = await fetch(
      backend_URL + 'diff',
      {method:'POST', body:fd, headers: {...fd.getHeaders}}
    )
    const documentDiff =  await response.json()
    return documentDiff.diff
  }

  const mapDiff = (diff) => {
    const diffvisualizer = diff.map(part => 
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

      <button onClick={ async () => {
        const diff = await getDiff(document1, document2);
        mapDiff(diff);
      }}> Generate diff</button>

      { diff !== null ? <div>{diff}</div> : ''}
      
    </div>
  );
}

export default DiffPage