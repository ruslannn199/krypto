import { Metadata } from 'next';
import { Form } from 'antd';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

export const metadata: Metadata = {
  title: 'Krypto App',
}

export default function Web() {
  return (
    <Form>
      <Input placeholder="Text" type="email" required />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
