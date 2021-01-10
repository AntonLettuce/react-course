const Post = (props) => {
  return (
    <div className="post">
      <img src=''></img>
      <span className='name'>{props.name}</span>
      <div className='postBody'>{props.body}</div>
      <div>
        <span>Лайк: {props.likeCount}</span>
        <button className='postButton'>Ответить</button>
      </div>
    </div>
  );
}

export default Post;
