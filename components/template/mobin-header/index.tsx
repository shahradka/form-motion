import { TypographyH4 } from '@/components/ui/typography-h4';

export const MobinHeader = ({
  children,
  title = '',
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="min-h-[250px] w-full flex flex-col items-center justify-content-center">
      {children}
      <div className="p-2">
        <TypographyH4>{title}</TypographyH4>
      </div>
    </div>
  );
};
