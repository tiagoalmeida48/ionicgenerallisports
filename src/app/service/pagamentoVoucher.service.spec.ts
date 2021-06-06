import { TestBed } from '@angular/core/testing';

import { PagamentoVoucherService } from './pagamentoVoucher.service';

describe('PagamentoVoucherService', () => {
  let service: PagamentoVoucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagamentoVoucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
