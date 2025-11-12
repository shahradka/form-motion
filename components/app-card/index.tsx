import Image from 'next/image';
import { Card } from '../ui/card';
import { AllHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const AppCard = ({
  children,
  className,
  ...restProps
}: {
  children?: React.ReactNode;
} & AllHTMLAttributes<HTMLDivElement>) => {
  return (
    <Card
      className={cn(
        'flex flex-col rounded-b-none border-0! pb-0! overflow-hidden grow bg-primary-foreground items-center justify-end py-2 lg:w-10/12 md:w-10/12',
        className,
      )}
      {...restProps}
    >
      {children}
      <div className="relative w-full h-65">
        <Image src="/road.webp" className="w-full" fill alt="road_img"></Image>
      </div>
    </Card>
  );
};
