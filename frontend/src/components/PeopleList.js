import { useState, useEffect } from "react"


const backend_URL = process.env.REACT_APP_BACKEND_URL



const PeopleList = () => {

    const [people, setPeople] = useState([])
    const [reload, setReload] = useState(false)

    const deleteUser = async (person) => {
        const response = await fetch(
            backend_URL + 'users', 
            {
                method:"DELETE",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(person)
            })

            const result = await response.json()
            console.log(result)
            setReload(!false)
    }

    
    
    useEffect(() => {
        const getPeople = async () => {

            const response = await fetch(backend_URL + 'users/')
            console.log(response)
    
            const people =  await response.json()
    
            console.log(people)
    
            const peopleList = people.map(person => {
                return (
                <li className="user"> 
                    <p>Name: {person.firstName} </p> 
                    <p>Surname: {person.lastName} </p>
                    <p>Role: {person.role} </p>
                    <button onClick={() => deleteUser(person)}> Delete</button>
                </li>
                )
            });
    
            setPeople(peopleList)
        }
        getPeople()
    }, [reload])
    
    
    return (
    <ul> 
        {people}
    </ul>)
    
}

export default PeopleList