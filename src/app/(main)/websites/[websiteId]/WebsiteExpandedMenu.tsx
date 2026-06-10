import { NavMenu } from '@/components/common/NavMenu';
import { useMessages, useNavigation } from '@/components/hooks';
import {
  AppWindow,
  Bank,
  Cpu,
  FileCode,
  Fingerprint,
  Globe,
  Key,
  Laptop,
  Lightning,
  Link,
  MagnifyingGlass,
  MapPin,
  Megaphone,
  Monitor,
  Network,
  PaperPlaneTilt,
  ShareNetwork,
  SignIn,
  SignOut,
  Stack,
  Tag,
  Target,
  TextT,
  Translate,
} from '@/components/icons';

export function WebsiteExpandedMenu({
  excludedIds = [],
  onItemClick,
}: {
  excludedIds?: string[];
  onItemClick?: () => void;
}) {
  const { t, labels } = useMessages();
  const {
    updateParams,
    query: { view },
  } = useNavigation();

  const filterExcluded = (item: { id: string }) => !excludedIds.includes(item.id);

  const items = [
    {
      label: 'URL',
      items: [
        {
          id: 'path',
          label: t(labels.path),
          path: updateParams({ view: 'path' }),
          icon: <FileCode />,
        },
        {
          id: 'entry',
          label: t(labels.entry),
          path: updateParams({ view: 'entry' }),
          icon: <SignIn />,
        },
        {
          id: 'exit',
          label: t(labels.exit),
          path: updateParams({ view: 'exit' }),
          icon: <SignOut />,
        },
        {
          id: 'title',
          label: t(labels.title),
          path: updateParams({ view: 'title' }),
          icon: <TextT />,
        },
        {
          id: 'query',
          label: t(labels.query),
          path: updateParams({ view: 'query' }),
          icon: <MagnifyingGlass />,
        },
      ].filter(filterExcluded),
    },
    {
      label: t(labels.sources),
      items: [
        {
          id: 'referrer',
          label: t(labels.referrer),
          path: updateParams({ view: 'referrer' }),
          icon: <ShareNetwork />,
        },
        {
          id: 'channel',
          label: t(labels.channel),
          path: updateParams({ view: 'channel' }),
          icon: <Megaphone />,
        },
        {
          id: 'domain',
          label: t(labels.domain),
          path: updateParams({ view: 'domain' }),
          icon: <Globe />,
        },
      ].filter(filterExcluded),
    },
    {
      label: t(labels.location),
      items: [
        {
          id: 'country',
          label: t(labels.country),
          path: updateParams({ view: 'country' }),
          icon: <Globe />,
        },
        {
          id: 'region',
          label: t(labels.region),
          path: updateParams({ view: 'region' }),
          icon: <MapPin />,
        },
        {
          id: 'city',
          label: t(labels.city),
          path: updateParams({ view: 'city' }),
          icon: <Bank />,
        },
      ].filter(filterExcluded),
    },
    {
      label: t(labels.environment),
      items: [
        {
          id: 'browser',
          label: t(labels.browser),
          path: updateParams({ view: 'browser' }),
          icon: <AppWindow />,
        },
        {
          id: 'os',
          label: t(labels.os),
          path: updateParams({ view: 'os' }),
          icon: <Cpu />,
        },
        {
          id: 'device',
          label: t(labels.device),
          path: updateParams({ view: 'device' }),
          icon: <Laptop />,
        },
        {
          id: 'language',
          label: t(labels.language),
          path: updateParams({ view: 'language' }),
          icon: <Translate />,
        },
        {
          id: 'screen',
          label: t(labels.screen),
          path: updateParams({ view: 'screen' }),
          icon: <Monitor />,
        },
      ].filter(filterExcluded),
    },
    {
      label: t(labels.utm),
      items: [
        {
          id: 'utmSource',
          label: t(labels.source),
          path: updateParams({ view: 'utmSource' }),
          icon: <Link />,
        },
        {
          id: 'utmMedium',
          label: t(labels.medium),
          path: updateParams({ view: 'utmMedium' }),
          icon: <PaperPlaneTilt />,
        },
        {
          id: 'utmCampaign',
          label: t(labels.campaign),
          path: updateParams({ view: 'utmCampaign' }),
          icon: <Target />,
        },
        {
          id: 'utmContent',
          label: t(labels.content),
          path: updateParams({ view: 'utmContent' }),
          icon: <Stack />,
        },
        {
          id: 'utmTerm',
          label: t(labels.term),
          path: updateParams({ view: 'utmTerm' }),
          icon: <Key />,
        },
      ].filter(filterExcluded),
    },
    {
      label: t(labels.other),
      items: [
        {
          id: 'event',
          label: t(labels.event),
          path: updateParams({ view: 'event' }),
          icon: <Lightning />,
        },
        {
          id: 'hostname',
          label: t(labels.hostname),
          path: updateParams({ view: 'hostname' }),
          icon: <Network />,
        },
        {
          id: 'distinctId',
          label: t(labels.distinctId),
          path: updateParams({ view: 'distinctId' }),
          icon: <Fingerprint />,
        },
        {
          id: 'tag',
          label: t(labels.tag),
          path: updateParams({ view: 'tag' }),
          icon: <Tag />,
        },
      ].filter(filterExcluded),
    },
  ];

  return <NavMenu items={items} selectedKey={view} onItemClick={onItemClick} />;
}
