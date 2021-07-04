import {getUserPosts} from "../../services/user.services";
import {useState} from "react";
import Posts from "../posts/Posts";


export default function User({item}) {
    let[posts, setPosts] = useState([]);

    return(
        <div>
            {item.name}
            <button onClick={() => {
                getUserPosts(item.id).then(value => setPosts([...value.data]));
            }}> <span>Show Posts</span>
            </button>
                {
                   posts.map(value => <Posts items={value}/>)
                }
        </div>
    )
}