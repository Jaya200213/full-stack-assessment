import { useEffect, useState } from 'react';
import PostList from './components/PostList';
import { fetchPosts } from './services/api';
import type { Post } from './types/post';

type RequestState = 'idle' | 'loading' | 'success' | 'error';

function App(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<RequestState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const loadPosts = async () => {
      setStatus('loading');
      setErrorMessage('');

      try {
        const data = await fetchPosts();
        setPosts(data);
        setStatus('success');
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unable to load posts';
        setErrorMessage(message);
        setStatus('error');
      }
    };

    void loadPosts();
  }, []);

  return (
    <main className="container">
      <h1>Full-Stack Assessment</h1>
      <p className="lead">
        This UI fetches posts from the assessment backend. Use it as a starting point to demonstrate your skills.
      </p>

      {status === 'loading' ? <p>Loading posts…</p> : null}
      {status === 'error' ? <p className="error">{errorMessage}</p> : null}

      {status === 'success' ? <PostList posts={posts} /> : null}
    </main>
  );
}

export default App;
