import Link from "next/link";
import Image from "next/image";
export default function NavLinks() {
  return (
    <>
      <Link href="/">
        <Image src="/logo.png" width={40} height={40} alt="logo image" />
      </Link>
    </>
  );
}
