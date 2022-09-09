import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaItemListComponent } from './manga-item-list.component';

describe('MangaItemListComponent', () => {
  let component: MangaItemListComponent;
  let fixture: ComponentFixture<MangaItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
