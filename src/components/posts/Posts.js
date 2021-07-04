import Post from "../post/Post";

export default function Posts ({item}) {
    // console.log(item)
    return (
        <div className={'userPostsWrapper'}>
            {
                item.map(post => <Post key={item.id} item={post}/>)
            }
        </div>
    )
}