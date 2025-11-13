import { AppCard } from '@/components/app-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import messageConstants from '@messages';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col items-center grow w-full">
      <AppCard className="w-full">
        <div className="p-15 app-card-inside grow w-full flex flex-col justify-center items-center">
          <Link href="/counseling">
            <Button size="xl">{`${messageConstants.enter} ${messageConstants.appointment} ${messageConstants.consoling}`}</Button>
          </Link>
        </div>
      </AppCard>
    </div>
  );
}
