const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following statement
      // this asserts that the expected callback will show us the following parameters and values of children
      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    it("should add a child to the 'children' array", () => {
      // TODO: Add a comment describing the purpose of the following declarations
      // creates two different different objects (child and daycare) (Arrange)
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following method
      // adds the child that was created to the daycare that was created
      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statements
      // Asserts that the expected interaction is that the child will be added to daycare and the number goes up by 1 and that the children to be added is equal to 0
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
      // expecting the children.length is equal to 0 bc the age limit is too high
      expect(dayCare.children.length).toEqual(0);
    });

    it("should not add a child if already at capacity", () => {
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);

      // TODO: Add a comment describing the purpose of the following expression
      // adding an array of children to daycare
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
      // to check the amount of children added to daycare is equal to 3
      expect(dayCare.children.length).toEqual(3);
    });

    it("should throw an error if not provided a Child object as an argument", () => {
      // TODO: Add a comment describing the purpose of the following declaration
      // creates an error to be thrown when a child object is not provided (arrange)
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );

      // TODO: Add a comment describing the purpose of the following expression
      // setting a callback function (Arrange)
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      // TODO: Add a comment describing the purpose of the following statement
      // it is expected to be an error when the function is started (assert)
      expect(cb).toThrowError(err);
    });
  });

  describe("pickupChild", () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
      // this removes children who have been picked up
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);

      // TODO: Add a comment describing the purpose of the following statement
      // this shows the expected result which is that the children who haven't been picked up are still in the array
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
      // will not remove anything as child is not in 'children'
      const removed = dayCare.pickupChild("Fred");

      // TODO: Add a comment describing the purpose of the following statement
      // expected result is going to be undefined as 'Fred' is not in the const children
      expect(typeof removed).toEqual("undefined");

      // TODO: Add a comment describing the purpose of the following statement
      // expected to throwback names of all 3 chidlren as none were removed
      expect(dayCare.children).toEqual([child1, child2, child3]);
    });
  });
});
