import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import BarChartComponent, { BarChartData } from "./BarChart/Component";
import ChartLegend, { ChartLegendData } from "../Charts/ChartLegend";
import { VoteResult } from "../../../../__generated__/graphql";
import { useTheme } from "styled-components/native";

const Wrapper = styled.View`
  align-items: center;
`;

interface Props {
  data: Pick<VoteResult, "namedVote" | "partyVotes">;
  legendData: ChartLegendData[];
}

const BarChart: React.FC<Props> = ({ data, legendData }) => {
  const theme = useTheme();
  const [chartWidth, setChartWidth] = useState(
    Math.min(
      400,
      Dimensions.get("window").width,
      Dimensions.get("window").height
    )
  );

  const onLayout = () => {
    const newChartWidth = Math.min(
      400,
      Dimensions.get("window").width,
      Dimensions.get("window").height
    );
    if (newChartWidth !== chartWidth) {
      setChartWidth(newChartWidth);
    }
  };

  const getPartyColor = (party: string) => {
    switch (party) {
      case "Union":
        return theme.colors.party.Union.background;
      case "SPD":
        return theme.colors.party.SPD.background;
      case "AfD":
        return theme.colors.party.AfD.background;
      case "FDP":
        return theme.colors.party.FDP.background;
      case "Linke":
        return theme.colors.party.Linke.background;
      case "Grüne":
        return theme.colors.party.Grüne.background;
      default:
        return theme.colors.text.tertiary;
    }
  };

  const prepareData = () => {
    const chartData: BarChartData[] = [
      {
        label: "Zugestimmt",
        values: [],
      },
      {
        label: "Enthalten",
        values: [],
      },
      {
        label: "Ablehnung",
        values: [],
      },
      {
        label: "Abwesend",
        values: [],
      },
    ];

    const preparedData = data.partyVotes.reduce((prev, { party, deviants }) => {
      const color = getPartyColor(party);
      chartData[0].values.push({
        label: party,
        value: deviants.yes || 0,
        color,
      });
      chartData[1].values.push({
        label: party,
        value: deviants.abstination || 0,
        color,
      });
      chartData[2].values.push({
        label: party,
        value: deviants.no || 0,
        color,
      });
      chartData[3].values.push({
        label: party,
        value: deviants.notVoted || 0,
        color,
      });
      return chartData;
    }, chartData);

    if (!data.namedVote) {
      preparedData.pop();
    }
    return preparedData;
  };

  const chartData = prepareData();

  return (
    <Wrapper onLayout={onLayout}>
      <BarChartComponent data={chartData} width={chartWidth} maxHeight={300} />
      <ChartLegend data={legendData} />
    </Wrapper>
  );
};

export default BarChart;
