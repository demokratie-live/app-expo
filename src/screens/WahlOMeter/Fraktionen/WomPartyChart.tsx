import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { useRecoilValue } from "recoil";
import { ParlamentIdentifier, parlaments } from "../../../api/state/parlament";
import { localVotesState } from "../../../api/state/votesLocal";
import { usePartyChartDataQuery } from "../../../__generated__/graphql";
import { ListLoading } from "../../../components/ListLoading";
import NoVotesPlaceholder from "../NoVotesPlaceholder";
import { useLegislaturePeriodStore } from "src/api/state/legislaturePeriod";
import Header from "../Header";
import { Segment } from "../../Bundestag/List/Components/Segment";
import { WomPartyContext } from "./context";
import { PartyChartSection } from "./PartyChartSection";
import { getMatchingProcedures, partyChartData } from "./utils";

const Wrapper = styled.View`
  padding-top: 18px;
  align-self: stretch;
`;

export const WomPartyChart: React.FC = () => {
  const { legislaturePeriod } = useLegislaturePeriodStore();
  const parlamentIdentifier = `BT-${legislaturePeriod}` as ParlamentIdentifier;
  const parlament = parlaments[parlamentIdentifier];
  const localVotes = useRecoilValue(localVotesState);
  const [selectedPartyIndex, setSelectedPartyIndex] = useState(0);
  const { setWomParty, party: womParty } = useContext(WomPartyContext);

  const { data: proceduresData } = usePartyChartDataQuery({
    variables: {
      procedureIds: localVotes.map(({ procedureId }) => procedureId),
      pageSize: 999999,
      period: parlament.period,
    },
  });

  if (!proceduresData) {
    return <ListLoading />;
  }

  const totalProcedures = proceduresData.partyChartProcedures?.total || 0;
  const matchingProcedures = getMatchingProcedures({
    votedProcedures: proceduresData || {
      partyChartProcedures: { procedures: [], total: 0 },
    },
    localVotes,
  });

  const preparedData = partyChartData(matchingProcedures, localVotes);

  if (!preparedData[selectedPartyIndex]) {
    return (
      <>
        <NoVotesPlaceholder subline="Fraktionen" />
        <Segment text="Abstimmungen" />
      </>
    );
  }

  if (!womParty) {
    setWomParty(preparedData[selectedPartyIndex].party);
  }

  const handlePartySelect = (index: number) => {
    setSelectedPartyIndex(index);
    setWomParty(preparedData[index].party);
  };

  return (
    <Wrapper>
      <Header
        totalProcedures={totalProcedures}
        votedProceduresCount={matchingProcedures.length}
      />
      <PartyChartSection
        preparedData={preparedData}
        selectedPartyIndex={selectedPartyIndex}
        onPartySelect={handlePartySelect}
      />
      <Segment text="Abstimmungen" />
    </Wrapper>
  );
};
