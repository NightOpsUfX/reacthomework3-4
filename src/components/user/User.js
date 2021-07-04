import {getUserPosts} from "../../services/user.services";
import {useState} from "react";
import Posts from "../posts/Posts";
import Post from "../post/Post";


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

export default function User({item, showUserPosts}) {
    let[posts, setPosts] = useState([]);
    // console.log(posts)

    return(
        <div>
            {item.name}
            <button onClick={() => {
                showUserPosts(item.id)
            }}> <span>Show Posts</span>
            </button>
        </div>
    )
}