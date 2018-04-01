import { GameForFunPage } from './app.po';

describe('game-for-fun App', () => {
  let page: GameForFunPage;

  beforeEach(() => {
    page = new GameForFunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
