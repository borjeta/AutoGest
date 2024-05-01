import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepropietarioComponent } from './homepropietario.component';

describe('HomepropietarioComponent', () => {
  let component: HomepropietarioComponent;
  let fixture: ComponentFixture<HomepropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepropietarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
