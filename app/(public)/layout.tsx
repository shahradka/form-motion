import { MobinHeader } from '@/components/template/mobin-header';
import { MobinLogo } from '@/components/template/mobin-logo';
import { roads_are_waiting_for_you } from '@messages';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col pt-5 items-center justify-center justify-content: stretch; min-h-screen 2xl:max-w-[1280px] xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full m-auto">
      <header className="w-full">
        <MobinHeader title={roads_are_waiting_for_you}>
          <MobinLogo />
        </MobinHeader>
      </header>
      <main className="w-full flex flex-col grow items-center">{children}</main>
    </div>
  );
}
