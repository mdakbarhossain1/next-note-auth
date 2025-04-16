'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [post, setPost] = useState({ title: '', content: '' });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
    });
    setPost({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <input className="border p-2 w-full" placeholder="Title" value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
      <textarea className="border p-2 w-full" placeholder="Content" value={post.content} onChange={e => setPost({ ...post, content: e.target.value })} />
      <button className="bg-green-500 text-white p-2 w-full">Add Post</button>
    </form>
  );
}
