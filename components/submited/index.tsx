import { CheckIcon } from '../icons/check';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { back_to_home } from '@messages';
import Link from 'next/link';

export const Submitted = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 2 }}
      animate={{
        scale: 1,
        transition: { duration: 2 },
      }}
      className="p-8 h-full flex flex-col justify-center items-center"
    >
      <div className="mb-10">{children}</div>
      <span className="text-green-500!">
        <CheckIcon />
      </span>
      <Link href="/">
        <Button className="mt-10">{back_to_home}</Button>
      </Link>
    </motion.div>
  );
};
