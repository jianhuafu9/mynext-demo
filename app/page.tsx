import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/nes.css';
import PageScrollEvent from './ui/page-scroll-event';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div id="slider-part" className="fixed right-0 z-[1] h-24 rounded-[5px]">
        <span className="flex justify-center">
          <p className="nes-balloon from-right">
            I am a lovely tomato. Welcome to my world.
          </p>
          <i className="nes-octocat animate mt-10"></i>
        </span>
      </div>
      <div className="h-[564px] bg-[url('/fanqie/banner2.png')] bg-cover bg-center" />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            欢迎来到番茄的世界🍅
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>进入</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/fanqie/banner3.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/fanqie/banner3.png"
            width={560}
            height={620}
            className="bock md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
      <PageScrollEvent nodeIds={["topping", "slider-part"]} />
    </main>
  );
}
