import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/logo_light.png'),
    icons: {
      translate: require('./assets/translate.png'),
    },
  };
}
