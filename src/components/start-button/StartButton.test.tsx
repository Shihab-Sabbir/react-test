import React from 'react';
import { cleanup,render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', () => {
    const { getByTestId } = render(<StartButton />);
    const startButton = getByTestId(TestElement.START_BUTTON);

    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveTextContent('Start Button');
  });

  it('SHOULD Render StartButton with click event',async () => {
    const expectedText = 'You will learn to develop JS games after you join with us! For now, best of luck!'

    window.alert = jest.fn();
    const { getByTestId } = render(<StartButton/>);
    const startButton = getByTestId(TestElement.START_BUTTON);

    await userEvent.click(startButton) ;
    expect(window.alert).toHaveBeenCalledWith(expectedText);
    
    jest.restoreAllMocks();
  });
});
