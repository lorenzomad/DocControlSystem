import {useState} from 'react'

const Uploader = ({title, uploadDocument}) => {

    const [document, setDocument] = useState()

    const onUpload = event => {
        setDocument(event.target.files[0])
    } 

    const onSubmit = e => {
        e.preventDefault()
        console.log(document.name)

    }


    return (
        <div>
            <p>{title}</p>
            <input type='file' onChange={onUpload}/>
            <button onClick={onSubmit}>Upload</button>

        </div>
    )
    
}

export default Uploader