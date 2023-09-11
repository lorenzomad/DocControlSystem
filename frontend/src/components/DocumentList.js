import { useState, useEffect } from "react"


const backend_URL = process.env.REACT_APP_BACKEND_URL

const DocumentList = () => {

    const [documents, setDocuments] = useState([])
    const [reload, setReload] = useState(false)

    const deleteDocument = async (document) => {
        const response = await fetch(
            backend_URL + 'documents', 
            {
                method:"DELETE",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(document)
            })

            const result = await response.json()
            console.log(result)
            setReload(!false)
    }

    
    
    useEffect(() => {
        const getDocuments = async () => {

            const response = await fetch(backend_URL + 'documents/')
            console.log(response)
    
            const documents =  await response.json()
    
            console.log(documents)
    
            const docsList = documents.map(document => {
                return (
                <li className="user"> 
                    <p>Title: {document.title} </p> 
                    <button onClick={() => deleteDocument(document)}> Delete</button>
                </li>
                )
            });
    
            setDocuments(docsList)
        }
        getDocuments()
    }, [reload])
    
    
    return (
    <ul> 
        {documents}
    </ul>)
    
}

export default DocumentList