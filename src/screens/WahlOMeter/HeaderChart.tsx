import React, { useState, useCallback } from "react";
import { Dimensions } from "react-native";
import styled, { useTheme } from "styled-components/native";
import Svg, { Path, Text } from "react-native-svg";

const Wrapper = styled.View`
  align-items: center;
`;

interface Props {
  value: number;
  width?: number;
  showValue?: boolean;
  valueSize?: number;
  floatNumbers?: number;
}

const Chart: React.FC<Props> = ({
  value,
  width,
  showValue = false,
  valueSize = 3,
  floatNumbers = 1,
}) => {
  const theme = useTheme();
  const [chartWidth, setChartWidth] = useState(
    Math.min(Dimensions.get("window").width, Dimensions.get("window").height)
  );

  const onLayout = useCallback(() => {
    const newChartWidth = Math.min(
      Dimensions.get("window").width,
      Dimensions.get("window").height
    );
    if (chartWidth !== newChartWidth) {
      setChartWidth(newChartWidth);
    }
  }, [chartWidth]);

  return (
    <Wrapper onLayout={onLayout}>
      <Svg
        viewBox="0 0 36 36"
        width={width || chartWidth - 60}
        height={width || chartWidth - 60}
        style={{ flex: 1, aspectRatio: 1 }}
      >
        <Path
          transform="translate(36), scale(-1, 1)"
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={theme.colors.text.seperator}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="100, 100"
        />
        <Path
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#5794CE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${Math.max(value - 2.5, 0.01)}, 100`}
        />
        {showValue && (
          <Text
            textAnchor="middle"
            fontSize={valueSize}
            x="18"
            y={36 / 2 + valueSize / 2 - 1}
            fill={theme.colors.text.tertiary}
          >
            {`${value.toFixed(floatNumbers).replace(".", ",")}%`}
          </Text>
        )}
      </Svg>
    </Wrapper>
  );
};

export default Chart;
