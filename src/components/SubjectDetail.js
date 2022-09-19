import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SubjectDetail = () => {
    const subjectId = useParams().id;
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://632566c59075b9cbee4a5ad1.mockapi.io/todos/${subjectId}`)
            .then(res => res.json())
            .then(res => setDetails(res))
            .catch(err => console.log(err))
    }, [])


    return (
        <React.Fragment>
            <h2 className="ui header">{details.title}</h2>
            <sub>{details.created_at}</sub><br /><br />
            <p>{details.content}</p>
        </React.Fragment>
    )
}

export default SubjectDetail