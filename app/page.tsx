import { Metadata } from 'next';
import { Select } from '@/components/Select';

export const metadata: Metadata = {
  title: 'Krypto App',
}

export default function Web() {
  return (
    <Select />
  );
}
