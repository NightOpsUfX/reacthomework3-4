///////////////////////////////////////////////////
//homework 3
//////////////////////////////////////////////////
// import {getComments} from "../../services/user.services";
// import {useEffect, useState} from "react";
// import Comment from "../comment/Comment";
//
//
// export default function Comments ({postId}) {
//     // console.log(postId)
//     let [comments, setComments] = useState([]);
//
//     useEffect(() => {
//         getComments(postId).then(value => setComments([...value.data]))
//     })
//
//     return(
//         <div className={'commentsWrapper'}>
//             {
//                 comments.map(value => <Comment key={value.id} item={value}/>)
//             }
//         </div>
//     )
// }

///////////////////////////////////////////////////
//homework 4
//////////////////////////////////////////////////

import Comment from "../comment/Comment";

export default function Comments ({comments}) {

    return (
        <div className={'userPostCommentsWrapper'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    )
}