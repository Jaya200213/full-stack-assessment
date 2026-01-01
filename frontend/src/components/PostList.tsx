import type { Post } from '../types/post';
import PostCard from './PostCard';

type PostListProps = {
  posts: Post[];
  onUpdated: (post:Post)=>void;
  onDeleted: (id: number)=>void;
};

function PostList({ posts, onUpdated, onDeleted }: PostListProps): JSX.Element {
  if (posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onUpdated={onUpdated} onDeleted={onDeleted}/>
      ))}
    </div>
  );
}

export default PostList;
