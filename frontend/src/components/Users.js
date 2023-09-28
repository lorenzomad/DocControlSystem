import { useState } from "react";
import CreateUserForm from "./CreateUserForm";
import PeopleList from './PeopleList'

const Users = () => {

    const [create, setCreate] = useState(false)
    const [show, setShow] = useState(false)
    

    

    return (

        <div className="users">
            <button onClick={() => {setShow(!show)}}>Show existing users</button>
            {show ? <PeopleList/> : ""}

            <button onClick={() => {setCreate(!create)}}>Create new User</button>
            {create ? <CreateUserForm/> : ""}
        </div>
    )

}

export default Users