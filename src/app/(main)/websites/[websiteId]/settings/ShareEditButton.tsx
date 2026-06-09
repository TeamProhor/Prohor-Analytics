import { useMessages } from '@/components/hooks';
import { Pencil } from '@/components/icons';
import { DialogButton } from '@/components/input/DialogButton';
import { ShareEditForm } from './ShareEditForm';

export function ShareEditButton({ shareId }: { shareId: string }) {
  const { t, labels } = useMessages();

  return (
    <DialogButton icon={<Pencil />} title={t(labels.share)} variant="quiet" width="600px">
      {({ close }) => {
        return <ShareEditForm shareId={shareId} onClose={close} />;
      }}
    </DialogButton>
  );
}
