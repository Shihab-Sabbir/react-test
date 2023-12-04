import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ButtonStyled = styled.button(
  (): CSSObject => ({
    backgroundColor: '#34d399',
    color: '#022c22',
    position: 'absolute',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.3s ease-in-out',
    fontWeight: 'bold',
    top: gameConfig.startButton.offsetTop,
    borderRadius: gameConfig.startButton.borderRadius,
    height: gameConfig.startButton.height,
    width: gameConfig.startButton.width,
    fontSize: gameConfig.startButton.fontSize,

    ':hover': {
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      transform: 'translateY(-4px)',
    },
    ':active': {
      transform: 'translateY(0px)',
    },

    '@media (min-width: 853px)': {
      fontSize: '1.3rem',
      width: '60%',
    },
    '@media (min-width: 641px) and (max-width: 852px)': {
      fontSize: '1.2rem',
      borderRadius: 12,
    },
    '@media (min-width: 361px) and (max-width: 640px)': {
      borderRadius: 8,
      fontSize: '1.1rem',
      height: '45px',
      width: '50%',
    },
    '@media (max-width: 360px)': {
      borderRadius: 6,
      fontSize: '1rem',
      height: '40px',
      width: '45%',
    },
    '@media (max-height: 639px)': {
      maxHeight: '40px',
      fontSize: '1rem',
    },
  }),
);
