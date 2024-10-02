import localFont from 'next/font/local';

export const EudoxusSans = localFont({
  src: [
    { path: './EudoxusSans-Regular.woff', weight: '400', style: 'normal' },
    { path: './EudoxusSans-Bold.woff', weight: '700', style: 'normal' }
  ]
});
