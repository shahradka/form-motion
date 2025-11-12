import Image from 'next/image';
import { Card } from '../ui/card';

export const AppCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Card className="flex flex-col rounded-b-none border-0! pb-0! overflow-hidden grow bg-primary-foreground items-center justify-end py-2 lg:w-10/12 md:w-10/12">
      {children}
      <div className="relative w-full h-65">
        <Image src="/road.webp" className="w-full" fill alt="road_img"></Image>
      </div>
    </Card>
  );
};
