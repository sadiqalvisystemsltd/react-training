import React from "react";
import BlogInfo from '../blog/bloginfo';

function Home(props) {
    
    return (
        <>
            <p>List of current users</p>
            {
                props.currentUsers.map((user, i) => {
                    return <p key={i}>{user.name}<br/></p>;
                })

            }
            <BlogInfo />
        </>
    )
}

export default Home;