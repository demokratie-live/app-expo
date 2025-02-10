import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import { localVoteState } from '../../../api/state/votesLocal';
import { ListItem } from '../../../components/ListItem';
import { communityVoteData } from '../../../lib/PieChartCommunityData';
import { pieChartGovernmentData } from '../../../lib/PieChartGovernmentData';
import { CommunityVotes, VoteResult } from '../../../__generated__/graphql';
import { useTheme } from 'styled-components/native';

const Container = styled.View`
  padding-top: 18px;
  padding-horizontal: 18px;
`;
interface Props {
  title: string;
  procedureId: string;
  voteDate?: Date;
  voteEnd?: Date;
  voted: boolean;
  voteResults?: Pick<VoteResult, 'yes' | 'abstination' | 'no'> | null;
  communityVotes?: Pick<CommunityVotes, 'yes' | 'total' | 'abstination' | 'no'> | null;
  sessionTOPHeading?: string;
  subjectGroups: string[];
  votedGovernment?: boolean;
}

export const Intro: React.FC<Props> = ({
  title,
  procedureId,
  voteDate,
  voteEnd,
  voted,
  voteResults,
  communityVotes,
  sessionTOPHeading,
  subjectGroups,
  votedGovernment,
}) => {
  const theme = useTheme();
  // If no session top headings available use subject groups
  let subline = null;
  if (sessionTOPHeading) {
    subline = sessionTOPHeading;
  } else if (subjectGroups) {
    subline = subjectGroups.join(', ');
  }
  const localSelection = useRecoilValue(localVoteState(procedureId))?.selection;

  const communityVoteSlices = communityVoteData({
    communityVotes,
    localSelection,
    voted,
    theme
  });

  const govSlices = pieChartGovernmentData({
    voteResults,
    votedGovernment,
    theme
  });

  return (
    <Container>
      <ListItem
        title={title}
        isIntro
        subline={subline}
        voteDate={voteDate}
        endDate={voteEnd}
        voted={voted}
        votes={communityVotes ? communityVotes.total || 0 : 0}
        govermentChart={{
          votes: govSlices,
          large: true,
        }}
        communityVotes={communityVoteSlices}
      />
    </Container>
  );
};
