import { NinjaDirectoryPage } from './app.po';

describe('ninja-directory App', () => {
  let page: NinjaDirectoryPage;

  beforeEach(() => {
    page = new NinjaDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
