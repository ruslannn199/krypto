import { Metadata } from 'next';
import { Password } from '@/components/Password';

export const metadata: Metadata = {
  title: 'Krypto App',
}

export default function Web() {
  return (
    <Password />
  );
}
