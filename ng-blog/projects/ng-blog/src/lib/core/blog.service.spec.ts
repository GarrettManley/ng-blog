import { TestBed } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BlogService', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });
  });

  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });

  // describe('getBlogList()', () => {
  //   it('should return a list of Blogs', async () => {
  //     // arrange
  //     const service: BlogService = TestBed.get(BlogService);

  //     // act
  //     const result = await service.getBlogListAsync();

  //     // assert
  //     expect(result).toBeDefined();
  //   });
  // });
});
