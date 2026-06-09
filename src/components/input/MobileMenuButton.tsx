import { Button, Dialog, type DialogProps, DialogTrigger, Icon, Modal } from '@umami/react-zen';
import { List } from '@/components/icons';

export function MobileMenuButton(props: DialogProps) {
  return (
    <DialogTrigger>
      <Button>
        <Icon>
          <List />
        </Icon>
      </Button>
      <Modal placement="left" offset="80px">
        <Dialog variant="sheet" {...props} style={{ width: 'auto' }} />
      </Modal>
    </DialogTrigger>
  );
}
