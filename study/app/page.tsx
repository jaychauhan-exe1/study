
import Link from 'next/link';
import { List } from './components/List';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl">
          Advanced Javascript. 
        </h1>
        <List>
          <Link href="topics/closures">
            <span>Closures</span>
          </Link>
          <Link href="topics/promises">
            <span>Promises</span>
          </Link>
          <Link href="topics/async-await">
            <span>Async/Await</span>
          </Link>
        </List>

      </main>
    </div>
  );
}
