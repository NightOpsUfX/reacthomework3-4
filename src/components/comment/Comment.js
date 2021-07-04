export default function Comment ({item}) {
    // console.log(item);
    return (
        <div className={'commentItemWrapper'}>
            <h4>{item.name}</h4>
            <p>{item.body}</p>
        </div>
    )
}