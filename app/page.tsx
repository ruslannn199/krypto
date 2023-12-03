import { Metadata } from 'next';
import { Search } from '@/components/Search';

export const metadata: Metadata = {
  title: 'Krypto App',
}

export default function Web() {
  return (
    <Search />
  );
}
