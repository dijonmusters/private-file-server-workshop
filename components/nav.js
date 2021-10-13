import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex text-2xl border-b">
      <Link href="/">
        <a className="flex-1 py-4 text-center">Upload</a>
      </Link>
      <Link href="/downloads">
        <a className="flex-1 py-4 text-center">Download</a>
      </Link>
    </nav>
  );
};

export default Nav;
