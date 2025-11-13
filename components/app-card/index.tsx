'use client';
import { AllHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export const AppCard = ({
  children,
  className,
  ...restProps
}: {
  children?: React.ReactNode;
} & AllHTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center grow"
      initial={{ scale: 0, opacity: 0, y: 100, transition: { duration: 0.3 } }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.5, opacity: 0, y: 100 }}
    >
      <div
        className={cn(
          'flex flex-col grow items-center justify-end lg:w-10/12 md:w-10/12',
          className,
        )}
        {...restProps}
      >
        {children}
      </div>
    </motion.div>
  );
};
