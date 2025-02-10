import { Slice } from '../components/PieChart';
import { CommunityVotes } from '../__generated__/graphql';
import { DefaultTheme } from 'styled-components/native';

interface Props {
  communityVotes?: Pick<CommunityVotes, 'yes' | 'total' | 'abstination' | 'no'> | null;
  voted: boolean;
  localSelection?: 'YES' | 'ABSTINATION' | 'NO';
  theme: DefaultTheme;
}

export const communityVoteData = ({ communityVotes, voted, localSelection, theme }: Props): Slice[] => {

  return (communityVotes
    ? [
      {
        percent: (communityVotes.yes || 0) / (communityVotes.total || 0),
        color: voted ? theme.colors.vote.community.yes : theme.colors.vote.notVoted.yes,
        large: localSelection === 'YES',
      },
      {
        percent: (communityVotes.abstination || 0) / (communityVotes.total || 0),
        color: voted ? theme.colors.vote.community.abstination : theme.colors.vote.notVoted.abstination,
        large: localSelection === 'ABSTINATION',
      },
      {
        percent: (communityVotes.no || 0) / (communityVotes.total || 0),
        color: voted ? theme.colors.vote.community.no : theme.colors.vote.notVoted.no,
        large: localSelection === 'NO',
      },
    ]
    : [{ percent: 1, color: theme.colors.vote.notVoted.abstination, large: true }])
};
