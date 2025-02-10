import React from 'react';
import { SearchBar } from '@democracy-deutschland/ui';
import styled from 'styled-components/native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchHistoryState, searchTermState } from '../../api/state/search';
import { useFinishSearchMutation } from '../../__generated__/graphql';
import { useTheme } from 'styled-components/native';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const SearchHeader: React.FC = () => {
  const theme = useTheme();
  const [term, setTerm] = useRecoilState(searchTermState);
  const setHistory = useSetRecoilState(searchHistoryState);
  const [executeFinishSearch] = useFinishSearchMutation();

  const finishSearch = () => {
    const termClean = term.trim();
    setHistory(prev => (termClean ? new Set([termClean, ...Array.from(prev)]) : prev));
    executeFinishSearch({
      variables: {
        term: termClean,
      },
    });
  };

  // throttle to handle android endless changing error
  const onChangeText = (text: string) => {
    if (typeof text === 'string') {
      setTerm(text);
    }
  };
  return (
    <Wrapper>
      <SearchBar
        textInput={{
          placeholder: 'Suche',
          onSubmitEditing: finishSearch,
          onChangeText: onChangeText,
          value: term,
          style: {
            backgroundColor: theme.colors.background.pushBox
          }
        }}
      />
    </Wrapper>
  );
};
