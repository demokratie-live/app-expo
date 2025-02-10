import { LocalVote } from '../../../../api/state/votesLocal';
import { VoteSelection } from '../../../../__generated__/graphql';
import { DefaultTheme } from 'styled-components/native';

// Filtered Array of procedures voted local
export const getMatchingProcedures = ({
  votedProcedures,
  localVotes,
}: {
  localVotes: LocalVote[];
  votedProcedures: {
    procedureId: string;
    decision: VoteSelection;
  }[];
}) =>
  votedProcedures.filter(({ procedureId }) =>
    localVotes.find(({ procedureId: pid }) => pid === procedureId),
  );

export const pieChartData = ({
  localVotes,
  matchingProcedures,
  theme
}: {
  localVotes: LocalVote[];
  matchingProcedures: {
    procedureId: string;
    decision: VoteSelection;
  }[];
  theme: DefaultTheme
}) => {
  // Pie Chart Data Preparation
  const pieDataRaw = matchingProcedures.map(({ decision, procedureId }) => {
    const userVote = localVotes.find(({ procedureId: pid }) => pid === procedureId);
    return {
      deputy: decision,
      me: userVote ? userVote.selection : undefined,
    };
  });
  const pieData = pieDataRaw.reduce(
    (pre, { deputy, me }) => {
      if (me === deputy) {
        return { ...pre, matches: pre.matches + 1, count: pre.count + 1 };
      } else {
        return { ...pre, diffs: pre.diffs + 1, count: pre.count + 1 };
      }
    },
    { matches: 0, diffs: 0, count: 0 },
  );
  return [
    {
      label: 'Übereinstimmungen',
      percent: pieData.matches / pieData.count || 0,
      value: pieData.matches,
      total: pieData.count,
      color: theme.colors.vote.wom.match,
    },
    {
      label: 'Differenzen',
      percent: pieData.diffs / pieData.count || 0,
      value: pieData.diffs,
      total: pieData.count,
      color: theme.colors.vote.wom.missmatch,
    },
  ];
};
