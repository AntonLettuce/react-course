import Post from './Post';

const Posts = (props) => {
  return (
    <div>
      <Post name='Dima' body='Hi, there' likeCount='25' />
      <Post name='Doma' body='Hello, there' likeCount='15' />
    </div>
  );
}

export default Posts;
