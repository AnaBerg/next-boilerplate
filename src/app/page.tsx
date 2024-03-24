import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <main>
      <p>Home Page</p>
      <Link href="/about">Go to About Page</Link>
    </main>
  );
};

export default HomePage;
