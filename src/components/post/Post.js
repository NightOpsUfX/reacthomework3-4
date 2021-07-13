// import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
// import Comments from "../comments/Comments";
//
// export default function Post ({item}) {
//     // console.log(item);
//     return (
//         <div className={'singlePostMarginWrapper'}>
//             <div className={'singlePostWrapper'}>
//                 <h3>{item.title}</h3>
//                 <p>{item.body}</p>
//             </div>
//
//             <Router>
//                 <Link to={'/comments'}>
//                     Comments
//                 </Link>
//
//                 <Switch>
//                     <Route path={'/comments'} render={(props) => {
//                         // console.log(props)
//                         return <Comments {...props} postId={item.id}/>
//                     }}/>
//                 </Switch>
//             </Router>
//         </div>
//     )
// }

///////////////////////////////////////////////////
//homework 4
//////////////////////////////////////////////////
import {Link, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {getComments} from "../../services/user.services";
import Comments from "../comments/Comments";


export default function Post ({post}) {

    let [comments, setPostComments] = useState([]);

    useEffect(() => {
        getComments(post.id).then(response => setPostComments([...response.data]))
    }, [])

    // console.log(comments)

    return(
        <div>
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p><Link to={'/posts/' + post.id + '/comments'}>Show post's comments</Link></p>
            </div>
            <div>
                <Route exact path={'/posts/' + post.id + '/comments'} render={() => {

                    return <Comments comments={comments}/>
                }}/>

            </div>

        </div>

    )
}