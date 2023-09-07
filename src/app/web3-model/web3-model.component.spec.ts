import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3ModelComponent } from './web3-model.component';

describe('Web3ModelComponent', () => {
  let component: Web3ModelComponent;
  let fixture: ComponentFixture<Web3ModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Web3ModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Web3ModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
