import { DefaultTheme } from 'styled-components/native';
import { Slice } from '../components/PieChart';
import { useTheme } from 'styled-components/native';

interface Props {
  decision?: 'YES' | 'ABSTINATION' | 'NOTVOTED' | 'NO' | null;
  colorSchema: 'GOVERNMENT' | 'COMMUNITY';
  theme: DefaultTheme;
}

const colorSchemas = (theme: DefaultTheme) => ({
  GOVERNMENT: {
    YES: theme.colors.vote.government.yes,
    ABSTINATION: theme.colors.vote.government.abstination,
    NO: theme.colors.vote.government.no,
    NOTVOTED: theme.colors.vote.government.notVoted,
  },
  COMMUNITY: {
    voted: {
      YES: theme.colors.vote.community.yes,
      ABSTINATION: theme.colors.vote.community.abstination,
      NO: theme.colors.vote.community.no,
      NOTVOTED: theme.colors.background.secondary,
    },
    notVoted: {
      YES: theme.colors.vote.notVoted.yes,
      ABSTINATION: theme.colors.vote.notVoted.abstination,
      NO: theme.colors.vote.notVoted.no,
      NOTVOTED: theme.colors.background.secondary,
    },
  },
});

const getColor = ({
  decision,
  colorSchema,
}: {
  decision: 'YES' | 'ABSTINATION' | 'NOTVOTED' | 'NO';
  colorSchema: Props['colorSchema'];
}): string => {
  const theme = useTheme();
  let colors: {
    YES: string;
    ABSTINATION: string;
    NO: string;
    NOTVOTED: string;
  };
  if (colorSchema === 'COMMUNITY') {
    if (decision === 'NOTVOTED') {
      colors = colorSchemas(theme)[colorSchema].notVoted;
    } else {
      colors = colorSchemas(theme)[colorSchema].voted;
    }
  } else {
    colors = colorSchemas(theme)[colorSchema];
  }
  return colors[decision];
};

export const pieChartFull = ({ decision, colorSchema, theme }: Props): Slice[] => {
  switch (decision) {
    case 'YES':
      return [
        {
          color: getColor({ decision, colorSchema }),
          percent: (1 || 0) / 1,
          large: true,
        },
      ];
    case 'NO':
      return [
        {
          color: getColor({ decision, colorSchema }),
          percent: (1 || 0) / 1,
          large: true,
        },
      ];
    case 'ABSTINATION':
      return [
        {
          color: getColor({ decision, colorSchema }),
          percent: (1 || 0) / 1,
          large: true,
        },
      ];
    case 'NOTVOTED':
      return [
        {
          color: getColor({ decision, colorSchema }),
          percent: (1 || 0) / 1,
          large: true,
        },
      ];
    default:
      return [
        {
          color: theme.colors.vote.notVoted.abstination,
          percent: (1 || 0) / 1,
        },
      ];
  }
};
