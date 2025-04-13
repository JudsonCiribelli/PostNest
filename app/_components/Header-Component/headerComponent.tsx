import Link from "next/link";

import { Button } from "../ui/button";

const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-between p-8">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-semibold">PostNet</h1>
        </Link>
      </div>
      <nav>
        <div className="flex items-center justify-between">
          <Button className="mx-4 p-5 text-lg font-normal" asChild>
            <Link href="/">Posts</Link>
          </Button>
          <Button className="mx-4 p-5 text-lg font-normal" asChild>
            <Link href="/">About</Link>
          </Button>
          <Button className="mx-4 p-5 text-lg font-normal" asChild>
            <Link href="/">User</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
