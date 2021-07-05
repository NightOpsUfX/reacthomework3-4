import {getUserPosts} from "../../services/user.services";
import {useEffect, useState} from "react";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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

export default function User({item}) {
    // console.log(item)
    let [posts, setUserPosts] = useState([]);
    // console.log(posts)

    useEffect(() => {
        getUserPosts(item.id).then(response => setUserPosts([...response.data]))
    }, [])

    return(
        <div>
            <div>
                <p>{item.name}</p>
                <p><Link to={'/posts'}>Show user's posts</Link></p>
            </div>

            <div>
                <Switch>
                    <Route path={'/posts'} render={(props) => {
                        // console.log(props)
                        // console.log(posts)
                        return <Posts {...props} posts={posts}/>
                    }}/>
                </Switch>
            </div>
        </div>
    )
}