import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCourseComponent } from './show-course.component';

describe('ShowCourseComponent', () => {
  let component: ShowCourseComponent;
  let fixture: ComponentFixture<ShowCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
