///////////////////////////////////////////////////
//homework 3
//////////////////////////////////////////////////
// import Post from "../post/Post";
//
// export default function Posts ({item}) {
//     // console.log(item)
//     return (
//         <div className={'userPostsWrapper'}>
//             {
//                 item.map(post => <Post key={item.id} item={post}/>)
//             }
//         </div>
//     )
// }

///////////////////////////////////////////////////
//homework 4
//////////////////////////////////////////////////

import Post from "../post/Post";
import {useEffect} from "react";
import {getUserPosts} from "../../services/user.services";

export default function Posts ({props, posts}) {
    // console.log(posts)

    return (
        <div className={'userPostsWrapper'}>

        </div>
    )
}
