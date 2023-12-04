import React from 'react';
import { cleanup,render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CampaignBanner } from './CampaignBanner';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    const { getByTestId } = render(<CampaignBanner />);
    const bannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    
    expect(bannerElement).toHaveStyle('display: flex;');
    expect(bannerElement).toHaveStyle('position: absolute;');
    expect(bannerElement).toHaveStyle('flex-direction: column;');
    expect(bannerElement).toHaveStyle('text-align: center;');
    expect(bannerElement).toHaveStyle(`top: ${gameConfig.campaignBanner.offsetTop};`);
    expect(bannerElement).toHaveStyle(`border-radius: ${gameConfig.campaignBanner.borderRadius}px;`);
    expect(bannerElement).toHaveStyle(`width: ${gameConfig.campaignBanner.width};`);
    expect(bannerElement).toHaveStyle(`padding: ${gameConfig.campaignBanner.padding}px;`);
    expect(bannerElement).toHaveStyle(`background-color: ${gameConfig.campaignBanner.background};`);
    expect(bannerElement).toHaveStyle(`color: ${gameConfig.campaignBanner.textColor};`);
  });
  

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    const { getByTestId } = render(<CampaignBanner />);
    const bannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    global.innerWidth = 250;
    const targetWidth = 'width:80%';
    expect(bannerElement).toBeInTheDocument();
    expect(bannerElement).toBeVisible();
    expect(bannerElement).toHaveStyle(targetWidth);

    global.innerWidth = window.innerWidth;
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport height is 600 px', () => {
    const { getByTestId } = render(<CampaignBanner />);
    const bannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    global.innerHeight = 600;
    const visible = 'visibility:visible';
    
    expect(bannerElement).toBeInTheDocument();
    expect(bannerElement).toBeVisible();
    expect(bannerElement).toHaveStyle(visible)
  
    global.innerHeight = window.innerHeight;
  });
});
