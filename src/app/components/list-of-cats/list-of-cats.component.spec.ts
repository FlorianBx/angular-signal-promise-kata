import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCatsComponent } from './list-of-cats.component';

describe('ListOfCatsComponent', () => {
  let component: ListOfCatsComponent;
  let fixture: ComponentFixture<ListOfCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfCatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
