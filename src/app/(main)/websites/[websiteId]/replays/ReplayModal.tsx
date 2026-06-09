'use client';
import { Column, Dialog, Modal, type ModalProps } from '@umami/react-zen';
import { ReplayPlayback } from '@/app/(main)/websites/[websiteId]/replays/[replayId]/ReplayPlayback';
import { useNavigation } from '@/components/hooks';

export interface ReplayModalProps extends ModalProps {
  websiteId: string;
  replayId?: string;
}

export function ReplayModal({ websiteId, replayId, ...props }: ReplayModalProps) {
  const {
    router,
    query: { replay },
    updateParams,
  } = useNavigation();

  const id = replayId || replay;

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      if (replayId) {
        router.back();
      } else {
        router.push(updateParams({ replay: undefined }));
      }
    }
  };

  return (
    <Modal
      placement="bottom"
      offset="80px"
      isOpen={!!id}
      onOpenChange={handleOpenChange}
      isDismissable
      {...props}
    >
      <Column height="100%" maxWidth="1320px" style={{ margin: '0 auto' }}>
        <Dialog variant="sheet">
          {({ close }) => (
            <Column padding="6">
              <ReplayPlayback websiteId={websiteId} replayId={id} onClose={close} />
            </Column>
          )}
        </Dialog>
      </Column>
    </Modal>
  );
}
