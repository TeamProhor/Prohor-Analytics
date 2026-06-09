import { getRequestConfig } from 'next-intl/server';
import bnBD from '../../public/intl/messages/bn-BD.json';

export default getRequestConfig(async () => {
  return {
    locale: 'bn-BD',
    messages: bnBD,
  };
});
