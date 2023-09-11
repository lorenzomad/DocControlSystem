import { useState } from "react"


const backend_URL = 'https://miniature-garbanzo-rqgrxqrvpvjcpqp-4000.app.github.dev/'

const CreateUserForm = () => {

    const [person, setPerson] = useState({
        firstName: "ciao",
        lastName: "belklo",
        role: "mion",
    })

    const handleFirstNameChange = (firstName) => {
        setPerson({
            ...person,
            firstName: firstName,
        })
    }

    const handleLastNameChange = (lastName) => {
        setPerson({
            ...person,
            lastName: lastName,
        })
    }

    const handleRoleChange = (role) => {
        setPerson({
            ...person,
            role: role,
        })
    }

    const submitAction = async (person) => {

        console.log(JSON.stringify(person))

        const response = await fetch(
            backend_URL + "users/create",
            {
                method:"POST", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify(person)
            }
        )

        content = await response.json()
        console.log(content)

    }

    return (
        <form>
            <label htmlFor="firstName" > Name </label>
            <input type="text" name="firstName" onChange={e => handleFirstNameChange(e.target.value)}/>
            <br />
            <label htmlFor="lastName" > Surname </label>
            <input type="text" name="lastName" onChange={e => handleLastNameChange(e.target.value)}/>
            <br />
            <label htmlFor="role" > Role </label>
            <input type="text" name="role" onChange={e => handleRoleChange(e.target.value)}/>
            <br />
            <button onClick={e => {
                e.preventDefault(),
                submitAction(person)
                }}>Create person</button> 

            <p>{person.firstName + person.lastName + person.role } </p>

        </form>
    )
}

export default CreateUserForm