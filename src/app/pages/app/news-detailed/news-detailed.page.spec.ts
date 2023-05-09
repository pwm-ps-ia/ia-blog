import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsDetailedPage } from './news-detailed.page';

describe('NewsDetailedPage', () => {
  let component: NewsDetailedPage;
  let fixture: ComponentFixture<NewsDetailedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsDetailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
