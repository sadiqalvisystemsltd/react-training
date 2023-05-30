import React from "react";


function Home(props) {
    
    return (
        <>
            <p>List of current users</p>
            {
                props.currentUsers.map((user, i) => {
                    return <p key={i}>{user.name}<br/></p>;
                })

            }
            
        </>
    )
}

export default Home;