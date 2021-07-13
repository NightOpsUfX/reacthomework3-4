

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

export default function Posts ({posts}) {
    // console.log(posts)
    return (
        <div className={'userPostsWrapper'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    )
}
