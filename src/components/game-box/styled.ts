import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ContainerStyled = styled.div(
  (): CSSObject => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: gameConfig.container.maxWidth,
    height: gameConfig.container.maxHeight,
    maxWidth: gameConfig.container.maxWidth,
    maxHeight: gameConfig.container.maxHeight,
    backgroundColor: '#a5f3fc',
    borderRadius: gameConfig.container.borderRadius,
    boxShadow: '0 0 24px 8px #0284c7',
    transition: 'width 0.1s, height 0.1s, borderRadius 0.1s',
    [`@media (min-width: 853px)`]: {
      width: '360px',
      height: '640px',
    },
    [`@media (min-width: 641px) and (max-width: 852px)`]: {
      width: '42.54vw',
      height: `calc(42.54vw*16/9)`,
      borderRadius: 20,
    },
    [`@media (min-width: 451px) and (max-width: 640px)`]: {
      width: '60vw',
      height: `calc(60vw*16/9)`,
      borderRadius: 15,
    },
    [`@media (min-width: 361px) and (max-width: 450px)`]: {
      width: '70vw',
      height: `calc(60vw*16/9)`,
      borderRadius: 15,
    },
    [`@media (min-width: 321px) and (max-width: 360px)`]: {
      width: '80vw',
      height: `calc(80vw*16/9)`,
      borderRadius: 15,
    },
    [`@media (max-width: 320px)`]: {
      width: '100vw',
      height: `calc(100vw*16/9)`,
      borderRadius: 0,
    },
    [`@media (max-height: 639px)`]: {
      maxHeight: '100vh',
    },
  }),
);
