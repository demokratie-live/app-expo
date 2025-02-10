import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType, Text, Platform, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgShareIos from '../../../components/Icons/ShareIos';
import SvgShare from '../../../components/Icons/Share';
import SvgBell from '../../../components/Icons/Bell';
import SvgBellSlash from '../../../components/Icons/BellSlash';
import { useTheme } from 'styled-components/native';

// Pick<Slice, 'percent' | 'large'>
const VoteIconButtonWrapper = styled.TouchableOpacity<
  Pick<Props, 'selection' | 'voteSelection' | 'voted'>
>`
  width: 88px;
  height: 88px;
  border-color: ${({ theme, selection }) => {
    switch (selection) {
      case 'ACTIVITY_INDEX':
        return theme.colors.primary;
      case 'NOTIFY':
        return theme.colors.text.badge;
      case 'SHARE':
        return theme.colors.tertiary; // TODO: Add to theme
      default:
        return theme.colors.text.tertiary;
    }
  }};
  border-radius: ${88 / 2}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ selection, voteSelection, voted, theme }) => {
    if ((voted || voteSelection) && selection !== voteSelection) {
      return theme.colors.text.tertiary;
    }
    switch (selection) {
      case 'ACTIVITY_INDEX':
        return theme.colors.primary;
      case 'NOTIFY':
        return theme.colors.text.badge;
      case 'SHARE':
        return theme.colors.tertiary; // TODO: Add to theme
      default:
        return theme.colors.text.tertiary;
    }
  }};
`;

const VoteIconButton = styled.Image.attrs<{ source: ImageSourcePropType }>(({ source }) => ({
  flex: 1,
  source,
  resizeMode: 'contain',
  width: null,
  height: null,
}))`
  width: 45px;
  height: 45px;
`;

interface Props {
  voteSelection?: string;
  onPress: () => void;
  selection: string;
  voted?: boolean;
  style?: ViewStyle;
  notify?: boolean;
}

const ActionButton: React.FC<Props> = ({
  voteSelection,
  onPress,
  selection,
  voted,
  style = {},
  notify,
}) => {
  const theme = useTheme();
  let styleWrapper;
  let Icon;
  const ShareComponent = Platform.OS === 'ios' ? SvgShareIos : SvgShare;
  switch (selection) {
    case 'ACTIVITY_INDEX':
      styleWrapper = {
        borderColor: theme.colors.primary,
      };
      Icon = (
        <TouchableOpacity onPress={onPress}>
          <VoteIconButton source={require('./assets/arrowUp.png')} />
        </TouchableOpacity>
      );
      break;
    case 'NOTIFY':
      styleWrapper = {
        borderColor: theme.colors.text.badge,
      };
      Icon = !notify ? (
        <SvgBell width={50} height={50} color="#fff" />
      ) : (
        <SvgBellSlash width={50} height={50} color="#fff" />
      );
      break;
    case 'SHARE':
      styleWrapper = {
        borderColor: theme.colors.tertiary, // TODO: Add to theme
      };
      Icon = (
        <ShareComponent
          width={45}
          height={45}
          color="#fff"
          style={{ marginBottom: Platform.OS === 'ios' ? 8 : 0 }}
        />
      );
      break;
    case 'UNKNOWN':
      Icon = (
        <Text
          style={{
            fontSize: 60,
            color: theme.colors.text.secondary,
            fontWeight: '200',
          }}
        >
          ?
        </Text>
      );
      break;

    default:
      break;
  }
  return (
    <VoteIconButtonWrapper
      voted={voted}
      disabled={!!(!onPress || voted)}
      selection={selection}
      voteSelection={voteSelection}
      onPress={onPress}
      style={{ ...styleWrapper, ...style }}
    >
      {Icon}
    </VoteIconButtonWrapper>
  );
};

export default ActionButton;
