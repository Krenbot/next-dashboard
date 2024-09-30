import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <>
      <Image
        src="/solar/20Logo-01-e1693253752458.png"
        width={500}
        height={500}
        alt="Arch C&I Logo"
      />
    </>

    // <div
    //   className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    // >
    //   <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
    //   <p className="text-[44px]">Acme</p>
    // </div>
  );
}
