import { MilionsLinksPage } from './app.po';

describe('milions-links App', () => {
  let page: MilionsLinksPage;

  beforeEach(() => {
    page = new MilionsLinksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
