import { TestBed } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { IBlog } from '../blog/blog.interface';

describe('BlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });

  describe('getBlogList()', () => {
    it('should return a list of Blogs', () => {
      // arrange
      const service: BlogService = TestBed.get(BlogService);

      // act
      const result = service.getBlogList();

      // assert
      expect(result).toBeDefined();
    });
  });
});
