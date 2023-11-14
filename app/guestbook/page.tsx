import { Suspense } from 'react';

export default function GuestbookPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        People who cared to Sign.
      </h1>
      <Suspense>
      <div className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          Friction:
        </span>
        Yo, This is my portfolio haha hehe huhu hoho.
      </div>
    </div>
      </Suspense>
    </section>
  );
}
