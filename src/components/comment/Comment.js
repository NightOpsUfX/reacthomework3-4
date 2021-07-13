///////////////////////////////////////////////////
//homework 3
//////////////////////////////////////////////////
// export default function Comment ({item}) {
//     // console.log(item);
//     return (
//         <div className={'commentItemWrapper'}>
//             <h4>{item.name}</h4>
//             <p>{item.body}</p>
//         </div>
//     )
// }

///////////////////////////////////////////////////
//homework 4
//////////////////////////////////////////////////

export default function Comment({comment}) {
    return(
        <div>
            {
                comment.name
            }

        </div>
    )
}