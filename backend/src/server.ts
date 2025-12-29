import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

interface Post {
  id: number;
  title: string;
  author?: string;
  excerpt?: string;
  publishedAt?: string;
}

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());

const dataFilePath = join(
  dirname(fileURLToPath(import.meta.url)),
  '../data/posts.json'
);

async function readPostsFromDisk(): Promise<Post[]> {
  const fileContents = await readFile(dataFilePath, 'utf-8');
  const data = JSON.parse(fileContents) as unknown;

  if (!Array.isArray(data)) {
    throw new Error('Posts data file must contain an array');
  }

  return data as Post[];
}

app.get('/api/posts', async (_req: Request, res: Response<Post[] | { message: string }>) => {
  try {
    const posts = await readPostsFromDisk();
    res.json(posts);
  } catch (error) {
    console.error('Failed to read posts data file', error);
    res.status(500).json({ message: 'Unable to load posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
