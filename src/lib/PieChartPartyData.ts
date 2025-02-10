import { Slice } from '../components/PieChart';
import { PartyVote, VoteResult } from '../__generated__/graphql';
import { DefaultTheme } from 'styled-components/native';

interface Props {
  votedGovernment?: boolean | null;
  voteResults?: Pick<VoteResult, 'yes' | 'abstination' | 'no'> | null;
  partyVotes?: Pick<PartyVote, 'deviants' | 'party'>[] | null;
  selectedParty: string;
  theme: DefaultTheme
}

export const pieChartPartyData = ({
  votedGovernment,
  partyVotes,
  selectedParty,
  voteResults,
  theme,
}: Props): Slice[] | undefined => {
  if (votedGovernment && voteResults && partyVotes) {
    const sumVotes =
      (voteResults.yes || 0) + (voteResults.abstination || 0) + (voteResults.no || 0);
    return partyVotes.reduce<Slice[]>((prev, party) => {
      if (party.party === selectedParty) {
        const { abstination, no, yes } = party.deviants;
        return [
          {
            color: theme.colors.vote.government.yes,
            percent: (yes || 0) / sumVotes,
            large: true,
          },
          {
            color: theme.colors.vote.government.yes,
            percent: (voteResults.yes - yes || 0) / sumVotes,
          },
          {
            color: theme.colors.vote.government.abstination,
            percent: (abstination || 0) / sumVotes,
            large: true,
          },
          {
            color: theme.colors.vote.government.abstination,
            percent: (voteResults.abstination - abstination || 0) / sumVotes,
          },
          {
            color: theme.colors.vote.government.no,
            percent: (no || 0) / sumVotes,
            large: true,
          },
          {
            color: theme.colors.vote.government.no,
            percent: (voteResults.no - no || 0) / sumVotes,
          },
        ];
      }
      return prev;
    }, []);
  }
  return;
};
