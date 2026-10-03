import Link from 'next/link';
import {
  EnvelopeOpenIcon,
  MagnifyingGlassIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const links = [
    
    {
      name: 'Détecter une attaque',
      href: '/dashboard',
      icon: MagnifyingGlassIcon,
    },
    { name: 'les réflexes en cas d\'attaque', href: '/dashboard/reflexes/1', icon: EyeIcon },
    { name: 'Détecter les arnaques', href: '/dashboard/phishing/1', icon: EnvelopeOpenIcon },
  ];
  
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <h1 className="mb-4 text-2xl font-bold">Sensibilisation à la cybersécurité</h1>
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        
        
          <>
            {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'                   
                  }
                >
                  <LinkIcon className="w-6" />
                  <p className="hidden md:block">{link.name}</p>
                </Link>
              );
            })}
          </>
        
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form className="mt-4">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-red-50 p-3 text-sm font-medium text-red-500 hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Se déconnecter</div>
          </button>
        </form>
      </div>
    </div>
  );
}