import Post from "../post/Post";

export default function Posts ({items}) {
    console.log(items)
    return (
        <div>
            <h3>{items.title}</h3>
            <p>{items.body}</p>
            <hr/>

            {
                // items.map(post => <Post item={post}/>)
            }
        </div>
    )
}