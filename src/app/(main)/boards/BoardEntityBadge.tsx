import { Icon, Row, Text } from '@umami/react-zen';
import { Favicon } from '@/components/common/Favicon';
import { SquaresFour, Link } from '@/components/icons';
import type { BoardEntityType } from '@/lib/boards';

export function BoardEntityBadge({
  type,
  name,
  domain,
}: {
  type: BoardEntityType;
  name: string;
  domain?: string;
}) {
  return (
    <Row padding borderRadius="full" backgroundColor="surface-base" border gap="2">
      <Icon>
        {type === 'pixel' ? <SquaresFour /> : type === 'link' ? <Link /> : <Favicon domain={domain} />}
      </Icon>
      <Text size="sm">{name}</Text>
    </Row>
  );
}
