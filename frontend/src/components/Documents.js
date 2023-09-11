import { useState } from "react";
import CreateDocumentForm from "./CreateDocumentForm";
import DocumentList from "./DocumentList";

const Users = () => {

    const [create, setCreate] = useState(false)
    const [show, setShow] = useState(false)
    

    

    return (

        <div className="documents">
            <button onClick={() => {setShow(!show)}}>Show existing documents</button>
            {show ? <DocumentList/> : ""}

            <button onClick={() => {setCreate(!create)}}>Create new Document</button>
            {create ? <CreateDocumentForm/> : ""}
        </div>
    )

}

export default Users