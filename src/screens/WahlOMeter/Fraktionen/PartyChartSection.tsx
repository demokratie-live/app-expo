import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { BarChart, ChartLegend } from "@democracy-deutschland/ui";
import ChartNote from "../ChartNote";
import { prepareChartLegendData } from "./utils";
import { WomPartyChartProps } from "./types";

const MAX_WIDTH = Math.min(
  380,
  Dimensions.get("window").width,
  Dimensions.get("window").height
);

const ChartWrapper = styled.View`
  padding-top: 18px;
  width: 100%;
  align-items: center;
`;

interface PartyChartSectionProps {
  preparedData: WomPartyChartProps["preparedData"];
  selectedPartyIndex: number;
  onPartySelect: (index: number) => void;
}

export const PartyChartSection: React.FC<PartyChartSectionProps> = ({
  preparedData,
  selectedPartyIndex,
  onPartySelect,
}) => {
  return (
    <ChartWrapper>
      <BarChart
        width={MAX_WIDTH - 36}
        height={315}
        data={preparedData}
        setSelectedParty={onPartySelect}
        selectedParty={selectedPartyIndex}
      />
      <ChartLegend
        data={prepareChartLegendData(preparedData, selectedPartyIndex)}
      />
      <ChartNote>
        Hohe Übereinstimmungen Ihrer Stellungnahmen mit mehreren Parteien
        bedeuten nicht zwangsläufig eine inhaltliche Nähe dieser Parteien
        zueinander
      </ChartNote>
    </ChartWrapper>
  );
};
