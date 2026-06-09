import { Button, DialogTrigger, Icon, List, Popover } from '@umami/react-zen';
import type { Key, ReactNode } from 'react';
import { DotsThreeOutline } from '@/components/icons';

export function MenuButton({
  children,
  onAction,
  isDisabled,
}: {
  children: ReactNode;
  onAction?: (action: string) => void;
  isDisabled?: boolean;
}) {
  const handleAction = (key: Key) => {
    onAction?.(key.toString());
  };

  return (
    <DialogTrigger>
      <Button variant="quiet" isDisabled={isDisabled}>
        <Icon>
          <DotsThreeOutline />
        </Icon>
      </Button>
      <Popover placement="bottom start">
        <List aria-label="menu" onAction={handleAction} style={{ minWidth: '140px' }}>
          {children}
        </List>
      </Popover>
    </DialogTrigger>
  );
}
