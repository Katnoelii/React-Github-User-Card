import React from 'react'


function FollowerCard(props) {
    const { follower } = props
    console.log(follower)

    return (
        <div className='followerCard'>
            <img src={follower.avatar_url}/>
            <h3>{follower.login}</h3>
            <p>Profile: <a href={follower.html_url}>{follower.html_url}</a></p>
            {/* <p>Location: {follower.location}</p>
            <p>Followers: {follower.followers}</p>
            <p>Following: {follower.following}</p>
            <p>Bio: {follower.bio}</p> */}
        </div>
    )
}


export default FollowerCard