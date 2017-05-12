import { TSLitePage } from './app.po';

describe('tslite App', () => {
  let page: TSLitePage;

  beforeEach(() => {
    page = new TSLitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
