import Image from 'next/image';
import Pic2 from 'public/Pic2.jpg';
import Pic1 from 'public/Pic1.jpg';
import Pic5 from 'public/Pic5.png';
import Pic3 from 'public/Pic3.jpg';
import Pic4 from 'public/Pic4.jpg';
import Pic6 from 'public/Pic6.jpg';
import Aquin from 'public/aquin.png';
import { Suspense } from 'react';



function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelSkeleton() {
  return (
    <>
      <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full h-[98px] !ml-0" />
      <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full h-[98px]" />
    </>
  );
}

async function ChannelLink({ img, link, name, subs }) {

  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {subs}
          </p>
        </div>
      </div>
    </a>
  );
}

async function BlogLink({ link, name }) {
  return (
    <a
      href={link}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100">
          {name}
        </p>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Yo, I'm Friction ✌️
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`
        Yo! I'm a 15-year-old entrepreneur and a coding enthusiast who's been in the game since the age of 7. I'm known as "Friction" over the internet its my sobriquet. Currently, I'm steering the ship as the founder of my startup, Aquin!
        `}
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Friction"
            src={Pic1}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Friction"
            src={Pic4}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Friction"
            src={Pic5}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Friction"
            src={Pic2}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Friction"
            src={Pic3}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Friction"
            src={Pic6}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I've got a amazing freelancing background and over 160 side-projects that span the entire tech spectrum. From full-stack websites to MERN projects, SaaS solutions, APIs, and even dabbling in video games, mobile applications, PWA, Web Apps, Machine Learning projects and much more! Work-wise, I've crafted websites for 5 talented artists, whipped up one for a college, bakery, law-firm and thrown few cents into various startups. Oh, and did I mention I've got some skin in the machine learning game too?
        </p>
      </div>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <Suspense fallback={<ChannelSkeleton />}>
          <ChannelLink
            img={Pic1}
            name="@itssFriction"
            link="https://www.youtube.com/@itssFriction/videos"
            subs="471 Subscribers"
          />
          <ChannelLink
            img={Pic1}
            name="@Friction470"
            link="https://twitter.com/Friction470"
            subs="39 Followers"
          />
          <ChannelLink
            img={Pic1}
            name="@Friction"
            link="https://www.linkedin.com/in/friction-friction-a4162a29a/"
            subs="2 Followers"
          />
        </Suspense>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        When it comes to languages, I'm not just talking, I talk the walk with proficiency in 14 of them. And hey, I've got a basic understanding of around 40 others.
        </p>
      </div>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <Suspense>
          <BlogLink
            name="I'm the founder of Aquin."
            link="https://aquindoc.netlify.app"
          />
          <BlogLink
            name="I've completed 160+ projects, been a freelancer, tried open-source."
            link="https://discord.com/invite/QTDMufddPE"
          />
          <BlogLink 
          name="I play ukulele, guitar, table tennis and fortnite." 
          link="https://open.spotify.com/user/31kpb6bsm44q3yzwe2tjdggmf54e" 
          />
        </Suspense>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Being entrepreneurial and innovative, with a strong knack for programming and software development. I eat, sleep, and breathe this stuff-it's not just a job, it's my passion!
        </p>
      </div>
      <div className="my-8 flex flex-row space-x-2 w-full h-40">
          <Image 
          alt="Aquin"
          src={Aquin}
          height={70}
          width={70}
          sizes="33vw"
          className="h-40 w-40"
          />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I'm someone who's not a average 15-year-old and can bring a mix of skills, dedication, and a truckload of coding languages to the table!
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://aquindoc.netlify.app"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Aquin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/Friction470"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Say, Yo!</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://discord.com/invite/QTDMufddPE"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Join Me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
