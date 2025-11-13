import Image from 'next/image';

export const MobinLogo = () => {
  return (
    <div className="flex flex-col">
      <Image src="/mobin-logo.webp" alt="Mobin Logo" width={110} height={125} blurDataURL="" />
    </div>
  );
};
