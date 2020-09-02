import React from 'react'

function CardMaker(props) {
    console.log(props)
    const { userData } = props

    return (
		<div className='cardMaker'>
            <h2>User Profile</h2>
            <img src={userData.avatar_url} />
            <h3>{userData.name}</h3>
            <h4>Username: {userData.login}</h4>
            <p>Location: {userData.location}</p>
            <p>Profile: <a href={userData.html_url}>{userData.html_url}</a></p>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <p>Bio: {userData.bio}</p>
		</div>
    )
}

export default CardMaker