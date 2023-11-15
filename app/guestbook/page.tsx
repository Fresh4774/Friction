import { Suspense } from 'react';

export default function GuestbookPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        What People Think.
      </h1>
      <Suspense>
      <div className="flex flex-col space-y-1 mb-4 gap-4">

      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          Lazy:
        </span>
        friction is my best friend and i love him ummmm yeah youre one of my dearest friends and im very grateful for you i Really enjoy talking to you, i think youre very mature for your age and smart and aaa youre very open minded for someone your age, youre kind, friendly, positive influence
      </div>
      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          Adam:
        </span>
        You're nice, seem really motivated, idk how to it's called in english but like interested in learning new stuff/improve yourself, nice to talk to
      </div>

      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          Sambhav:
        </span>
        Friction is just overkill for a 15 y/o I have never seen such an enthusiastic guy who is so good at what he does.
      </div>

      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          Snooze:
        </span>
        you are only 15 with such amazing ambitions I wish you a bright future sir ❤️
      </div>

      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          Manvi:
        </span>
        I'm so very much proud to be the creator of this genius.
      </div>

      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          Niraj:
        </span>
        Looking forward to handle finance of this chap
      </div>

      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          Friction:
        </span>
        Yo.
      </div>

    </div>
      </Suspense>
    </section>
  );
}
