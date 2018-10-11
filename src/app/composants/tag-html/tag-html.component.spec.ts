import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagHtmlComponent } from './tag-html.component';

describe('TagHtmlComponent', () => {
  let component: TagHtmlComponent;
  let fixture: ComponentFixture<TagHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
