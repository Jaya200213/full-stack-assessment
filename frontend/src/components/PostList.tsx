import type { Post } from '../types/post';
import PostCard from './PostCard';

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps): JSX.Element {
  if (posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
