import { useState } from "react"


const backend_URL = process.env.REACT_APP_BACKEND_URL

const CreateDocumentForm = () => {

    const [document, setDocument] = useState({
        title: "newDoc",
    })

    const handleTitleChange = (title) => {
        setDocument({
            title: title,
        })
    }

    const submitAction = async (document) => {

        console.log(JSON.stringify(document))

        const response = await fetch(
            backend_URL + "documents/create",
            {
                method:"POST", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify(document)
            }
        )

        const content = await response.json()
        console.log(content)

    }

    return (
        <form>
            <label htmlFor="title" > Document Title </label>
            <input type="text" name="title" onChange={e => handleTitleChange(e.target.value)}/>
            <br />
            <button onClick={e => {
                e.preventDefault()
                submitAction(document)
                }}>Create document</button> 
        </form>
    )
}

export default CreateDocumentForm