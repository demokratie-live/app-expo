import { Slice } from '../components/PieChart';
import { VoteResult } from '../__generated__/graphql';
import { useTheme } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

interface Props {
  votedGovernment?: boolean | null;
  voteResults?: Pick<VoteResult, 'yes' | 'abstination' | 'no'> | null;
  largeDecision?: 'YES' | 'ABSTINATION' | 'NOTVOTED' | 'NO' | null;
  theme: DefaultTheme
}

export const pieChartGovernmentData = ({
  votedGovernment,
  voteResults,
  largeDecision,
  theme,
}: Props): Slice[] | undefined => {
  if (votedGovernment && voteResults) {
    const sumVotes =
      (voteResults.yes || 0) + (voteResults.abstination || 0) + (voteResults.no || 0);
    return [
      {
        color: theme.colors.vote.government.yes,
        percent: (voteResults.yes || 0) / sumVotes,
        large: largeDecision === 'YES',
      },
      {
        color: theme.colors.vote.government.abstination,
        percent: (voteResults.abstination || 0) / sumVotes,
        large: largeDecision === 'ABSTINATION',
      },
      {
        color: theme.colors.vote.government.no,
        percent: (voteResults.no || 0) / sumVotes,
        large: largeDecision === 'NO',
      },
    ];
  }
  return;
};
