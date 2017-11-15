import { AirportFinderAngularPage } from './app.po';

describe('airport-finder-angular App', function() {
  let page: AirportFinderAngularPage;

  beforeEach(() => {
    page = new AirportFinderAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
