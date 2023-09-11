import { useState, useEffect } from "react"


const backend_URL = 'https://miniature-garbanzo-rqgrxqrvpvjcpqp-4000.app.github.dev/'



const PeopleList = () => {

    const [people, setPeople] = useState("")

    const getPeople = async () => {

        const response = await fetch(backend_URL + 'users/')
        console.log(response)

        const people =  await response.json()

        console.log(people)

        const peopleList = people.map(person => {
            return (
            <li> 
                Name: {person.firstName} 
                Surname: {person.lastName}
                Role: {person.role}
            </li>
            )
        });

        setPeople(peopleList)
    }
    
    useEffect(() => {
        getPeople()
    }, [])
    
    
    return (
    <ul> 
        {people}
    </ul>)
    
}

export default PeopleList