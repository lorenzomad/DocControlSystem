import {useState} from 'react'

const Uploader = ({title, uploadFunction}) => {

    const [document, setDocument] = useState()

    const onUpload = event => {
        setDocument(event.target.files[0])
        console.log(document)
    } 

    


    return (
        <div>
            <p>{title}</p>
            <input type='file' onChange={onUpload}/>
            <button onClick= {() => uploadFunction(document)}>Upload</button>

        </div>
    )
    
}

export default Uploader