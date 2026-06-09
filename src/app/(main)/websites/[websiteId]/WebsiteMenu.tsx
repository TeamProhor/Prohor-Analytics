import {
  Button,
  Icon,
  List,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  Popover,
  Text,
} from '@umami/react-zen';
import { Fragment } from 'react';
import { useMessages, useNavigation } from '@/components/hooks';
import { Pencil, DotsThree, ShareNetwork } from '@/components/icons';

export function WebsiteMenu({ websiteId }: { websiteId: string }) {
  const { t, labels } = useMessages();
  const { router, updateParams, renderUrl } = useNavigation();

  const menuItems = [
    { id: 'share', label: t(labels.share), icon: <ShareNetwork /> },
    { id: 'edit', label: t(labels.edit), icon: <Pencil />, seperator: true },
  ];

  const handleAction = (id: any) => {
    if (id === 'compare') {
      router.push(updateParams({ compare: 'prev' }));
    } else if (id === 'edit') {
      router.push(renderUrl(`/websites/${websiteId}`));
    }
  };

  return (
    <MenuTrigger>
      <Button variant="quiet">
        <Icon>
          <DotsThree />
        </Icon>
      </Button>
      <Popover placement="bottom">
        <List onAction={handleAction}>
          {menuItems.map(({ id, label, icon, seperator }, index) => {
            return (
              <Fragment key={index}>
                {seperator && <MenuSeparator />}
                <MenuItem id={id}>
                  <Icon>{icon}</Icon>
                  <Text>{label}</Text>
                </MenuItem>
              </Fragment>
            );
          })}
        </List>
      </Popover>
    </MenuTrigger>
  );
}
