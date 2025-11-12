import Image from 'next/image';

export const MobinLogo = () => {
  return (
    <div className="flex flex-col">
      <Image src="/mobin-logo.webp" alt="Mobin Logo" width={150} height={171} blurDataURL="" />
    </div>
  );
};
