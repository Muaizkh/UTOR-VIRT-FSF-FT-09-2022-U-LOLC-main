const FileIO = require('../fileIO');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const fileIO = new FileIO();
      const file = "message.txt";
      let data;

      fs.readFileSync.mockReturnValue("Hello World!");
      data = fileIO.read(file);

      expect(data).toEqual("Hello World!");
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      const fileIO = new fileIO();
      const path = "message.txt";
      const data ="Hello World!";

      fileIO.wrtie(path, data);

      expect(fs.readFileSync).lastCalledWith(path,data);
    });
  });
});
