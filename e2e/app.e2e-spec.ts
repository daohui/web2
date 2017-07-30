import { Web2Page } from './app.po';

describe('web2 App', () => {
  let page: Web2Page;

  beforeEach(() => {
    page = new Web2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
