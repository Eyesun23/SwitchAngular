import { SwitchAngularPage } from './app.po';

describe('switch-angular App', () => {
  let page: SwitchAngularPage;

  beforeEach(() => {
    page = new SwitchAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
