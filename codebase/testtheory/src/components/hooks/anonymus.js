import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Anonymus = () => {

    const [ posts, setPosts ]   =   useState([]);
    const [ id, setId ]         =   useState(1);

    useEffect(()=>{
    	axios.get( `https://jsonplaceholder.typicode.com/posts/${id}` )
          .then(function (response) {
            setPosts(prevState=>response.data);
          })
          .catch(function (error) {
            console.error(error)
          });

    	// return ()=>{
    	// }
    }, [id]);

	return (
		<>
    		<div>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
                <ul>
                    <li key={posts.id}>{ posts.title }</li>
                </ul>

    			{/*<ul>
                    { posts.map((post)=>{
                        return <li key={post.id}>{ post.title }</li>
                    }) }
                </ul>*/}
    		</div>
      	</>
	);
}

export default Anonymus;