import type { Post } from '../types/post';

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps): JSX.Element {
  const { title, author, excerpt, publishedAt } = post;
  const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString() : null;

  return (
    <article className="post-card">
      <header>
        <h2>{title}</h2>
        {author ? <p className="meta">By {author}</p> : null}
        {formattedDate ? <p className="meta">Published {formattedDate}</p> : null}
      </header>
      {excerpt ? <p>{excerpt}</p> : null}
    </article>
  );
}

export default PostCard;
