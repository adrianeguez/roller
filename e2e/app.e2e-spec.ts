import { AddressBookTestPage } from './app.po';

describe('address-book-test App', () => {
  let page: AddressBookTestPage;

  beforeEach(() => {
    page = new AddressBookTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
