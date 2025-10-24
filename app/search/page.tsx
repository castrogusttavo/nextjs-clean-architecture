'use client';
import { useState } from 'react';
import type { Repository } from '@/src/domain/entities/repository';
import { searchController } from '@/src/interface-adapters/controllers/search.controller';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState<Repository[]>([]);

  async function handleSearch() {
    const data = await searchController(query);
    setRepos(data);
  }

  return (
    <main className='max-w-lg mx-auto p-6'>
      <h1 className='text-xl font-semibold mb-4'>Buscar Repositórios</h1>
      <div className='flex gap-2 mb-4'>
        <input
          type='text'
          placeholder='ex: nextjs'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='border rounded px-3 py-2 flex-1'
        />
        <button
          type='button'
          onClick={handleSearch}
          className='bg-black text-white px-4 py-2 rounded'
        >
          Buscar
        </button>
      </div>
      <ul className='space-y-3'>
        {repos.map((r) => (
          <li key={r.id} className='border p-3 rounded'>
            <a
              href={r.html_url}
              target='_blank'
              className='font-medium hover:underline'
            >
              {r.name}
            </a>
            <p className='text-sm text-gray-500'>{r.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
