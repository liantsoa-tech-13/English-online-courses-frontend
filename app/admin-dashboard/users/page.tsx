'use client';
import { useState } from 'react';
import TopBar from './TopBar';
import Content from './Content';

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Content searchTerm={searchTerm} />
    </>
  );
}
