import { Metadata } from 'next';
import SettingsIcon from '@p/svg/settings.svg';
import { FloatButton } from '@/components/FloatButton';

export const metadata: Metadata = {
  title: 'Krypto App',
}

export default function Web() {
  return (
    <FloatButton customIcon={<SettingsIcon />} />
  );
}
