import { lightTheme, DefaultTheme, darkTheme } from '@democracy-deutschland/ui';

export interface ThemeInterface {
  colors: {
    tertiary: string;
  }
  // oldColors: {
  //   main: string;
  //   secondary: string;
  //   headerText: string;
  //   headerTextSecondary: string;
  //   tansparentSecondary: string;
  //   description: string;
  //   background: {
  //     header: string;
  //     main: string;
  //     secondary: string;
  //   };
  // };
  // textColors: {
  //   primary: string;
  //   secondary: string;
  //   tertiary: string;
  //   inverted: string;
  //   warn: string;
  // };
  distances: {
    main: number;
    secondary: number;
    small: number;
  };
}

const myLightTheme: ThemeInterface & DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    tertiary: '#b10dd3',
  },
  distances: {
    main: 18,
    secondary: 11,
    small: 4,
  },
};

const myDarkTheme: ThemeInterface & DefaultTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    primary: '#29608B',
    secondary: '#B5B5B5',
    tertiary: '#b10dd3',
    background: {
      primary: '#424242',
      secondary: '#B5B5B5',
      pushBox: '#FFFFFF88',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      tertiary: '#B5B5B5',
      colored: '#4494D3',
      danger: '#EC3E31',
      seperator: '#B5B5B5',
      badge: '#FFAB21',
      date: {
        future: '#44DB5E',
        current: '#F5A623',
        past: '#FE3824',
      },
    },
    vote: {
      community: {
        yes: '#16C063',
        abstination: '#2882E4',
        no: '#EC3E31',
      },
      government: {
        yes: '#99C93E',
        abstination: '#4CB0D8',
        no: '#D43194',
        notVoted: '#B1B3B4',
      },
      notVoted: {
        yes: '#C7C7CC',
        abstination: '#D8D8D8',
        no: '#B0AFB7',
      },
      wom: {
        match: '#F5A623',
        missmatch: '#B1B3B4',
      },
    },
    party: {
      Union: {
        background: '#32302e',
        text: '#dad9d4',
      },
      SPD: {
        background: '#E3000F',
        text: '#fff',
      },
      AfD: {
        background: '#009ee0',
        text: '#fff',
      },
      FDP: {
        background: '#ffed00',
        text: '#e5007d',
      },
      Linke: {
        background: '#CE2C55',
        text: '#fff',
      },
      Grüne: {
        background: '#46962b',
        text: '#fff',
      },
      ohne: {
        background: '#aaa',
        text: 'white',
      },
    },
  },
  distances: myLightTheme.distances,
};

type TheTheme = ThemeInterface & DefaultTheme;

export const lightCustomTheme: TheTheme = { ...myLightTheme };
export const darkCustomTheme: TheTheme = { ...myDarkTheme };