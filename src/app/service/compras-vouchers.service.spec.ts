import { TestBed } from '@angular/core/testing';

import { ComprasVouchersService } from './compras-vouchers.service';

describe('ComprasVouchersService', () => {
  let service: ComprasVouchersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasVouchersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
