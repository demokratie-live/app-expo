import { BarChartProps } from "@democracy-deutschland/ui";

export interface WomPartyChartProps {
  totalProcedures: number;
  matchingProcedures: any[]; // Type from your GraphQL schema
  selectedPartyIndex: number;
  onPartySelect: (index: number) => void;
  preparedData: BarChartProps["data"];
}