'use client';
import styles from './style.module.css'

interface User {
  id: number;
  name: string;
  email: string;
}

const allUsers: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
];

export default function Content({ searchTerm }: { searchTerm: string }) {
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className={styles.userContainer}>
    {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
        <li  className={styles.userBox} key={user.id}>
            {user.name} - {user.email}
        </li>
        ))
    ) : (
        <li>No users found.</li>
    )}
    </ul>
  );
}
