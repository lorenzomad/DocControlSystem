import { useState } from "react";
import CreateUserForm from "./CreateUserForm";



const Users = () => {

    const [create, setCreate] = useState(false)

    

    return (
        <div className="users">
            <button onClick={() => {setCreate(!create)}}>Create new User</button>
            {create ? <CreateUserForm/> : ""}
        </div>
    )

}

export default Users