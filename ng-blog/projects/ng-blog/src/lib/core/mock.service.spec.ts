import { MockService } from './mock.service';

describe('MockService', () => {
  const service: MockService = new MockService();

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`getMockBlog()`, () => {
    it('should return an IBlog object', () => {
      const blog = service.getMockBlog();
      expect(blog).toBeDefined();
    });
  });

  describe('getMarkdownLines()', () => {
    it('should return a value', () => {
      const lines = service.getMarkdownLines();
      expect(lines).toBeDefined();
    });

    it('should return the number of lines passed in as a number', () => {
      const numLines = 3;
      const lines = service.getMarkdownLines(numLines);
      expect(lines.length).toEqual(numLines);
    });
  });
});
