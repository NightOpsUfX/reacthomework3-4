

// export default function User({item}) {
//     let[posts, setPosts] = useState([]);
//     // console.log(posts)
//
//     return(
//         <div>
//             {item.name}
//             <button onClick={() => {
//                 getUserPosts(item.id).then(value => setPosts([...value.data]));
//             }}> <span>Show Posts</span>
//             </button>
//                 {
//                    <Posts key={item.id} item={posts}/>
//                 }
//         </div>
//     )
// }
////////////////////////////////////////////////
///////////////////////////////////////////////////
//homework 3
//////////////////////////////////////////////////
// export default function User({item, showUserPosts}) {
//     let[posts, setPosts] = useState([]);
//     // console.log(posts)
//
//     return(
//         <div>
//             {item.name}
//             <button onClick={() => {
//                 showUserPosts(item.id)
//             }}> <span>Show Posts</span>
//             </button>
//         </div>
//     )
// }

///////////////////////////////////////////////////
//homework 4
//////////////////////////////////////////////////
import {getUserPosts} from "../../services/user.services";
import {useEffect, useState} from "react";
import Posts from "../posts/Posts";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default function User({user}) {

    let [posts, setUserPosts] = useState([]);


    useEffect(() => {
        getUserPosts(user.id).then(response => setUserPosts([...response.data]))
    }, [])

    return(
        <div className={'userItemWrapper'}>
            <div>
                <h2>{user.name}</h2>
                <p><Link to={'/users/' + user.id + '/posts'}>Show user's posts</Link></p>
            </div>
            <div>
                <Route exact path={'/users/' + user.id + '/posts'} render={() => {
                    return <Posts posts={posts} userId={user.id}/>
                }}/>
            </div>
        </div>
    )
}