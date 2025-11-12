import { HtmlHTMLAttributes } from 'react';

export function TypographyP({
  children,
  className,
  ...restParams
}: {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <p
      {...restParams}
      className={`text-lg leading-7 [&:not(:first-child)]:mt-6 ${className ?? ''}`}
    >
      {children}
    </p>
  );
}
