import { bn, enUS } from 'date-fns/locale';

export const languages = {
  'bn-BD': { label: 'বাংলা', dateLocale: bn },
  'en-US': { label: 'English (US)', dateLocale: enUS },
};

export function getDateLocale(locale: string) {
  return languages[locale]?.dateLocale || enUS;
}

export function getTextDirection(locale: string) {
  return languages[locale]?.dir || 'ltr';
}
