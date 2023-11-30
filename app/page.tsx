import { Metadata } from "next";
import { Button } from "components/Button/Button";

export const metadata: Metadata = {
  title: "Krypto App",
}

export default function Web() {
  return (
    <>
      <Button disabled>some text</Button>
    </>
  )
}
