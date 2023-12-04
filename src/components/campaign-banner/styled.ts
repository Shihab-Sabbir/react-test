import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const BannerStyled = styled.div(
  (): CSSObject => ({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight:'fit-content',
    top: gameConfig.campaignBanner.offsetTop,
    borderRadius: gameConfig.campaignBanner.borderRadius,
    width: gameConfig.campaignBanner.width,
    padding: gameConfig.campaignBanner.padding,
    backgroundColor: gameConfig.campaignBanner.background,
    color: gameConfig.campaignBanner.textColor,

    '@media (min-width: 853px)': {
      fontSize: '1.1rem',
    },
    '@media (min-width: 641px) and (max-width: 852px)': {
      fontSize: '1rem',
      borderRadius: 8,
    },
    '@media (min-width: 361px) and (max-width: 640px)': {
      borderRadius: 6,
      fontSize: '0.95rem',
    },
    '@media (max-width: 360px)': {
      borderRadius: 4,
      fontSize: '0.9rem',
    },
    '@media (max-height: 639px)': {
      position: 'relative',
      height: '20vh',
      maxHeight:'75px',
      fontSize: '0.9rem',
    },
  }),
);
