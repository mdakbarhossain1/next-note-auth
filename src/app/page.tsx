'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">All Posts</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((post: any) => (
          <li key={post._id} className="border p-2 rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
