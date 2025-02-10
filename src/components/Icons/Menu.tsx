import * as React from 'react';
import { Svg, SvgProps, Path } from 'react-native-svg';

const SvgMenu = (props: SvgProps) => (
  <Svg
    aria-labelledby="t-menu--burger d-menu--burger"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    {...props}
  >
    <Path
      fill={props.color}
      d="M30 28a2 2 0 000-4H2a2 2 0 000 4h28zM30 18a2 2 0 000-4H2a2 2 0 000 4h28zM30 8a2 2 0 000-4H2a2 2 0 000 4h28z"
    />
  </Svg>
);

export default SvgMenu;
