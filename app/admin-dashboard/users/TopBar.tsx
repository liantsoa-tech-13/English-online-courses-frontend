'use client';
import Search from './SearchBar';

export default function TopBar({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) {
  return (
    <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}
