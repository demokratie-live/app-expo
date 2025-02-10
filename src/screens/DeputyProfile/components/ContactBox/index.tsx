import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { linking } from '../../../../lib/linking';
import { Contacts } from '../..';
import SvgMail from '../../../../components/Icons/Mail';
import SvgFacebook from '../../../../components/Icons/Facebook';
import SvgTwitter from '../../../../components/Icons/Twitter';
import SvgInstagram from '../../../../components/Icons/Instagram';
import SvgPlanet from '../../../../components/Icons/Planet';

const ContactWrapper = styled.View`
  flex-wrap: wrap;
  padding-top: 18px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

const IconWrapper = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  border-width: 2px;
  border-radius: 33px;
  justify-content: center;
  align-items: center;
`;

const ServiceWrapper = styled.View`
  align-items: center;
  flex: 1;
  min-width: 80px;
  max-width: 200px;
  height: 100px;
`;

const Domain = styled.Text`
  font-size: 12px;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Username = styled.Text`
  font-size: 12px;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

interface Props {
  contacts: Contacts[];
}

const ContactBox: React.FC<Props> = ({ contacts }) => {
  const theme = useTheme();

  const getIcon = ({ name, url, username }: { name: string; url: string; username?: string }) => {
    switch (name) {
      case 'email': {
        const email = `mailto:${url}`;
        return (
          <ServiceWrapper key={url}>
            <IconWrapper onPress={linking(email)}>
              <SvgMail width={40} height={40} color={theme.colors.text.primary} />
            </IconWrapper>
          </ServiceWrapper>
        );
      }

      case 'facebook':
      case 'Facebook':
        return (
          <ServiceWrapper key={url}>
            <IconWrapper onPress={linking(url)}>
              <SvgFacebook width={40} height={40} color={theme.colors.text.primary} />
            </IconWrapper>
            {!!username && <Username>{username}</Username>}
          </ServiceWrapper>
        );
      case 'twitter':
      case 'Twitter':
        return (
          <ServiceWrapper key={url}>
            <IconWrapper onPress={linking(url)}>
              <SvgTwitter width={40} height={40} color={theme.colors.text.primary} />
            </IconWrapper>
            {!!username && <Username>{username}</Username>}
          </ServiceWrapper>
        );
      case 'instagram':
      case 'Instagram':
        return (
          <ServiceWrapper key={url}>
            <IconWrapper onPress={linking(url)}>
              <SvgInstagram width={40} height={40} color={theme.colors.text.primary} />
            </IconWrapper>
            {!!username && <Username>{username}</Username>}
          </ServiceWrapper>
        );

      default:
        return (
          <ServiceWrapper key={url}>
            <IconWrapper onPress={linking(url)}>
              <SvgPlanet width={40} height={40} color={theme.colors.text.primary} />
            </IconWrapper>
            <Domain>{name}</Domain>
          </ServiceWrapper>
        );
    }
  };

  return (
    <ContactWrapper>
      {contacts.map(({ name, URL, username }) => getIcon({ name, url: URL, username }))}
    </ContactWrapper>
  );
};

export default ContactBox;
