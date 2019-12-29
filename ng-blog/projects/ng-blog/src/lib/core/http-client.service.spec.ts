import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientService } from './http-client.service';

describe('HttpClientService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		})
	);

	it('should be created', () => {
		const service: HttpClientService = TestBed.get(HttpClientService);
		expect(service).toBeTruthy();
	});
});
