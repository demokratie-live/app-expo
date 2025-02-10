import { ChartData } from "../Bundestag/VotedProceduresWrapper";
import { LocalVote } from "../../../api/state/votesLocal";
import { BarChartProps, ChartLegendData } from "@democracy-deutschland/ui";

export const getMatchingProcedures = ({ votedProcedures, localVotes }: ChartData) => {
  return votedProcedures.partyChartProcedures.procedures.filter(
    ({ procedureId }) =>
      localVotes.find(({ procedureId: pid }) => pid === procedureId)
  );
};

export const partyChartData = (
  matchingProcedures: ReturnType<typeof getMatchingProcedures>,
  localVotes: LocalVote[]
): BarChartProps["data"] => {
  const chartData = matchingProcedures.reduce<{
    [party: string]: { diffs: number; matches: number };
  }>((prev, { voteResults, procedureId: itemProcedureId }) => {
    if (!voteResults) {
      return prev;
    }
    const { partyVotes } = voteResults;
    const userVote = localVotes.find(
      ({ procedureId: pid }) => pid === itemProcedureId
    );
    const me = userVote ? userVote.selection : undefined;
    partyVotes.forEach(({ party, main }) => {
      if (party === "fraktionslos") {
        return prev;
      }
      let matched = false;
      if (me === main) {
        matched = true;
      }

      if (prev[party] && matched) {
        prev = {
          ...prev,
          [party]: {
            ...prev[party],
            matches: prev[party].matches + 1,
          },
        };
      } else if (prev[party] && !matched) {
        prev = {
          ...prev,
          [party]: {
            ...prev[party],
            diffs: prev[party].diffs + 1,
          },
        };
      } else if (!prev[party] && matched) {
        prev = {
          ...prev,
          [party]: {
            diffs: 0,
            matches: 1,
          },
        };
      } else if (!prev[party] && !matched) {
        prev = {
          ...prev,
          [party]: {
            matches: 0,
            diffs: 1,
          },
        };
      }
    });
    return prev;
  }, {});
  return Object.keys(chartData)
    .map((key) => ({
      party: key,
      deviants: [
        {
          label: "Übereinstimmungen",
          value: chartData[key].matches,
          color: "#f5a623",
        },
        {
          label: "Differenzen",
          value: chartData[key].diffs,
          color: "#b1b3b4",
        },
      ],
    }))
    .sort((a, b) => b.deviants[0].value - a.deviants[0].value);
};

export const prepareChartLegendData = (
  preparedData: BarChartProps["data"],
  selectedPartyIndex: number
): ChartLegendData[] => {
  return [
    {
      label: "Übereinstimmungen",
      value: preparedData[selectedPartyIndex].deviants[0].value,
      color: "#f5a623",
    },
    {
      label: "Differenzen",
      value: preparedData[selectedPartyIndex].deviants[1].value,
      color: "#b1b3b4",
    },
  ];
};