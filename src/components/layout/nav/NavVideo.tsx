import { YoutubeIcon } from '@/utils/Icons';

function NavVideo() {
  return (
    <div className="max-lg:hidden self-stretch h-64 p-5 flex-col justify-start items-center gap-2.5 flex">
      <div className="px-5 pt-5 pb-7 bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 flex">
        <div className="w-16 h-16 relative">
          <YoutubeIcon />
        </div>
        <div className="h-24 flex-col justify-start items-center gap-3.5 flex">
          <div className="flex-col justify-start items-center flex">
            <div className="text-center text-neutral-700 text-sm font-medium font-['Public Sans'] leading-snug">
              Monti Tutorials
            </div>
            <div className="w-36 text-center text-neutral-400 text-xs font-normal font-['Public Sans'] leading-tight">
              Get started with ease
            </div>
          </div>
          <div className="px-4 py-2 bg-green-700 rounded shadow flex-col justify-center items-center flex">
            <div className="text-center text-white text-sm font-normal font-['Public Sans'] leading-snug">
              Start Learning
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavVideo;
