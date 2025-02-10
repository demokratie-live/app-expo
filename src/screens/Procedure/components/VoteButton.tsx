import React from 'react';
import styled from 'styled-components/native';
import { Lock } from '../../../components/Icons';
import { useTheme } from 'styled-components/native';

const VoteIconButtonWrapper = styled.TouchableOpacity<
  Pick<Props, 'selection' | 'voteSelection' | 'voted'>
>`
  width: 88px;
  height: 88px;
  border-color: ${({ theme, selection }) => {
    switch (selection) {
      case 'YES':
        return `${theme.colors.vote.community.yes}CC`;
      case 'ABSTINATION':
        return `${theme.colors.vote.community.abstination}80`;
      case 'NO':
        return `${theme.colors.vote.community.no}80`;
      default:
        return theme.colors.text.tertiary;
    }
  }};
  border-radius: ${88 / 2}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ selection, voteSelection, voted, theme }) => {
    if ((voted || voteSelection) && selection !== voteSelection) {
      return `${theme.colors.text.primary}E6`;
    }
    switch (selection) {
      case 'YES':
        return theme.colors.vote.community.yes;
      case 'ABSTINATION':
        return theme.colors.vote.community.abstination;
      case 'NO':
        return theme.colors.vote.community.no;
      default:
        return theme.colors.text.tertiary;
    }
  }};
`;

const LockIconWrapper = styled.View`
  position: absolute;
  top: -3px;
  right: -3px;
  background-color: ${({ theme }) => `${theme.colors.background.primary}E6`};
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border-width: 1px;
  border-style: dashed;
  border-color: ${({ theme }) => `${theme.colors.text.primary}4D`};
`;

const VoteIconButton = styled.Image.attrs(() => ({
  flex: 1,
  resizeMode: 'contain',
  width: null,
  height: null,
}))`
  width: 40px;
  height: 40px;
`;

interface Props {
  voteSelection?: string;
  onPress?: () => void;
  selection: string;
  voted?: boolean;
  style?: object;
}

const VoteButton: React.FC<Props> = ({ voteSelection, onPress, selection, voted, style }) => {
  const theme = useTheme();
  let styleWrapper;
  let styleButton;
  switch (selection) {
    case 'YES':
      styleButton = {
        marginBottom: 5,
      };
      break;
    case 'ABSTINATION':
      styleWrapper = {
        borderColor: `${theme.colors.vote.community.abstination}CC`,
      };
      styleButton = {
        transform: [{ rotate: '-90deg' }],
        marginRight: 5,
      };

      break;
    case 'NO':
      styleWrapper = {
        borderColor: `${theme.colors.vote.community.no}CC`,
      };
      styleButton = {
        transform: [{ rotate: '180deg' }],
        marginTop: 5,
      };
      break;
    case 'UNKNOWN':
      styleButton = {
        transform: [{ rotate: '180deg' }],
        marginTop: 5,
      };
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
      {voted && (
        <LockIconWrapper>
          <Lock width={18} height={18} color="#bbb" />
        </LockIconWrapper>
      )}
      <VoteIconButton style={styleButton} source={require('./assets/thumbsUp.png')} />
    </VoteIconButtonWrapper>
  );
};

export default VoteButton;
