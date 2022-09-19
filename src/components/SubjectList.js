import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SubjectList = () => {

    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        fetch("https://632566c59075b9cbee4a5ad1.mockapi.io/todos")
            .then(res => res.json())
            .then(res => setSubjects(res))
    }, [])

    return (
        <div className="ui list">
            {
                subjects.map(subject => {
                    return (
                        <div className="item" key={subject.id}>
                            <img className="ui avatar image" src={subject.img} />
                            <div className="content">
                                <Link to={`posts/${subject.id}`} className="header">{subject.title}</Link>
                                <div className="description">{subject.created_at}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SubjectList