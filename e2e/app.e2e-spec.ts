import { HotelExplorerPage } from './app.po';

describe('hotel-explorer App', function() {
  let page: HotelExplorerPage;

  beforeEach(() => {
    page = new HotelExplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
