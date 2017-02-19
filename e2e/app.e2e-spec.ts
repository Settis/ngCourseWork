import { NgCourseWorkPage } from './app.po';

describe('ng-course-work App', () => {
  let page: NgCourseWorkPage;

  beforeEach(() => {
    page = new NgCourseWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
