import * as React from 'react';
import { Svg, SvgProps, Defs, Path, Use } from 'react-native-svg';

const SvgBook = (props: SvgProps) => (
  <Svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
    <Defs>
      <Path
        d="M969 137c-39.47-21.035-103.299-46-185-46-117.342 0-228.935 49.998-267 69-2.804 1.337-7.185 1.337-10 0-38.054-19.014-149.658-69-267-69-81.69 0-145.53 24.965-185 46-29.65 15.992-39.037 23.725-41 25-8.084 7.522-14 20.572-14 32v700c0 23.66 13.483 34.374 27 34 4.164.374 10.535-.793 17-6l28-15c35.907-19.077 93.808-41.695 168-42 82.128.305 162.41 26.948 215 49l30 13c7.885 3.869 17.283 6 27 6 9.728 0 19.115-2.131 27-6l30-13c52.534-22.041 132.85-48.695 215-49 74.192.305 132.093 22.923 168 42l28 15c6.465 5.218 12.848 6.374 17 6 13.529.374 27-10.328 27-34V194c0-11.428-5.916-24.455-14-32-1.929-1.275-11.327-9.019-41-25zM494 886c-.011 3.284-2.266 4.77-5 4l-19-9c-56.499-23.22-141.802-51.457-230-51-81.863-.457-145.772 24.535-185 46l-14 7c-2.825 1.553-5 .271-5-3V194c.102-1.35 1.344-4.083 2-5-.03.236 7.951-6.264 34-20 35.788-19.368 93.709-42 168-42 106.689 0 211.78 46.127 249 64 2.803 1.662 5 5.213 5 8v687zm494-6c0 3.278-2.163 4.56-5 3l-14-8c-39.25-20.469-103.149-45.46-185-45-88.22-.46-173.57 27.776-230 51l-19 9c-2.734.777-5-.72-5-4V199c0-2.799 2.197-6.35 5-8 37.23-17.862 142.323-64 249-64 74.314 0 132.234 22.632 168 42 25.548 13.452 33.734 19.975 34 20 .656.928 1.909 3.65 2 5v686z"
        id="book_svg__a"
      />
    </Defs>
    <Use fill={props.color} fillRule="nonzero" xlinkHref="#book_svg__a" />
  </Svg>
);

export default SvgBook;
