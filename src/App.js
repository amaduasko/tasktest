import React, { useEffect, useState } from 'react'
import getUsersAndPosts from './utils/fetch-api'
import CardList from './components/CardList/CardList'
import CardComponent from './components/Card/Card'
import Search from './components/Search/Search'

function App() {
    const [initialData, setInitialData] = useState([])
    const [postAndUsers, setPostAndUsers] = useState([])

    const handleSearch = (value) => {
        const filteredData = initialData.filter((user) =>
            user.name.toLowerCase().includes(value.toLowerCase())
        )
        return setPostAndUsers(filteredData)
    }

    useEffect(() => {
        getUsersAndPosts().then((data) => {
            setInitialData(data)
            setPostAndUsers(data)
        })
        return () => {
            setInitialData([])
            setPostAndUsers([])
        }
    }, [])

    return (
        <div className='App pt-5'>
            <Search onChange={(value) => handleSearch(value)} />
            <CardList>
                {postAndUsers.map(({ id, name, posts }) =>
                    posts.map(({ id, title, body }) => (
                        <CardComponent
                            key={id}
                            title={title}
                            body={body}
                            name={name}
                        />
                    ))
                )}
            </CardList>
        </div>
    )
}

export default App
