import { Jost } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import { Inter } from 'next/font/google';
// import { Lusitana } from 'next/font/google';

//Replacement for Futura (premium)
export const jost = Jost({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

//Replacement for Century Gothic (premium)
export const league_Spartan = League_Spartan({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

// export const inter = Inter({ subsets: ['latin'] });

// export const lusitana = Lusitana({
//   weight: ['400', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap',
// });
