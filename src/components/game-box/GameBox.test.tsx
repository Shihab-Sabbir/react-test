/* eslint-disable react/display-name */
import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestElement } from '../../enums/TestElement';
import { GameBox } from './GameBox';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px',async () => {
    act(() => {
      window.innerWidth = 1000;
      window.innerHeight = 1000;
      fireEvent(window, new Event('resize'));
    });

    const { getByTestId } = render(
      <GameBox>
        <div data-testid="child" />
      </GameBox>,
    );

    const containerStyled = getByTestId(TestElement.GAME_BOX);

    await waitFor(() => {
      expect(containerStyled).toHaveStyle('width: 360px');
      expect(containerStyled).toHaveStyle('height: 640px');
    });
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', async () => {
    act(() => {
      window.innerWidth = 300;
      window.innerHeight = 1000;
      fireEvent(window, new Event('resize'));
    });
  
    const { getByTestId } = render(
      <GameBox>
        <div data-testid="child" />
      </GameBox>,
    );
  
    const containerStyled = getByTestId(TestElement.GAME_BOX);
  
    await waitFor(() => {
      expect(containerStyled).toHaveStyle('width: 300px');
    });
  });

  it('SHOULD Render ContainerStyled with height 600px WHEN browsers viewport width 1000px and height is 600px', async () => {
    act(() => {
      window.innerWidth = 1000;
      window.innerHeight = 600;
      fireEvent(window, new Event('resize'));
    });
  
    const { getByTestId } = render(
      <GameBox>
        <div data-testid="child" />
      </GameBox>,
    );
  
    const containerStyled = getByTestId(TestElement.GAME_BOX);
  
    await waitFor(() => {
      expect(containerStyled).toHaveStyle('height: 600px');
    });
  });
});
