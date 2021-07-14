

// export default function Users () {
//
//     let [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         getUsers().then(value => setUsers([...value.data]))
//     }, []);
//
//     return(
//         <div>
//             {users.map(value => <User key={value.id} item={value}/>)}
//         </div>
//     )
// }
///////////////////////////////////////////////////
//homework 3
//////////////////////////////////////////////////
// export default function Users () {
//
//     let [users, setUsers] = useState([]);
//
//     let[posts, setPosts] = useState([]);
//
//     useEffect(() => {
//         getUsers().then(value => setUsers([...value.data]))
//     }, []);
//
//     function showUserPosts (id) {
//         getUserPosts(id).then(response => {
//             // console.log(response);
//             setPosts(response.data);
//         })
//     }
//
//     return(
//         <div className={'mainUserWrapper'}>
//             <div className={'userNamesWrapper'}>
//                 {users.map(value => <User key={value.id} showUserPosts={showUserPosts} item={value}/>)}
//             </div>
//            <div className={'userPostsMainWrapper'}>
//                <Posts key={posts.id} item={posts}/>
//            </div>
//         </div>
//     )
// }

///////////////////////////////////////////////////
//homework 4
//////////////////////////////////////////////////
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.services";
import User from "../user/User";


export default function Users () {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, []);

    return(
        <div className={'userNamesWrapper'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}