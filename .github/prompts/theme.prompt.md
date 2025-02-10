## Details of DefaultTheme

´´´typescript
interface PartyColor {
  background: string;
  text: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  background: {
    primary: string;
    secondary: string;
    pushBox: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    colored: string;
    danger: string;
    seperator: string;
    badge: string;
    date: {
      future: string;
      current: string;
      past: string;
    };
  };
  vote: {
    community: {
      yes: string;
      abstination: string;
      no: string;
    };
    government: {
      yes: string;
      abstination: string;
      no: string;
      notVoted: string;
    };
    notVoted: {
      yes: string;
      abstination: string;
      no: string;
    };
    wom: {
      match: string;
      missmatch: string;
    };
  };
  party: {
    Union: PartyColor;
    SPD: PartyColor;
    AfD: PartyColor;
    FDP: PartyColor;
    Grüne: PartyColor;
    Linke: PartyColor;
    ohne: PartyColor;
  };
}

export const lightColors: Colors = {
  primary: '#4494d3',
  secondary: '#1C659F',
  background: {
    primary: '#FFFFFF',
    secondary: '#EFEFF4',
    pushBox: '#00000088',
  },
  text: {
    primary: '#030303',
    secondary: '#FFFFFF',
    tertiary: '#5B595B',
    colored: '#4494D3',
    danger: '#EC3E31',
    seperator: '#6D6D72',
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
};

export const darkColors: Colors = {
  primary: '#29608B',
  secondary: '#B5B5B5',
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
};
```