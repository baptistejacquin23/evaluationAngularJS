'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /listerestaurant when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/listerestaurant");
  });


  describe('listerestaurant', function() {

    beforeEach(function() {
      browser.get('index.html#!/listerestaurant');
    });


    it('should render listerestaurant when user navigates to /listerestaurant', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('meilleurrestaurant', function() {

    beforeEach(function() {
      browser.get('index.html#!/meilleurrestaurant');
    });


    it('should render meilleurrestaurant when user navigates to /meilleurrestaurant', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
