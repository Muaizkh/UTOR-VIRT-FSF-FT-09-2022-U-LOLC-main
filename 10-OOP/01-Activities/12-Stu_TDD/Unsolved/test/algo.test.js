const Algo = require("../algo");

describe("Algo", () => {
  it("Should return an Algo object", () => {
    const obj = new Algo();
    expect(obj instanceof Algo).toEqual(true);
  });
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
it("Should take a string as an argument and return the reverse version of the string", () =>{
  const word= "olleH"
  const reversed = new Algo().reverse("Hello");
  expect(word === reversed).toEqual(true);
});
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("Should take a string as an argument and return the boolean 'true' if the provided string is a palindrome", ()=> {
      const palindrome1 = new Algo().isPalindrome("racecar");
      const palindrome2 = new Algo().isPalindrome("neon");
      expect(palindrome1).toEqual(true);
      expect (palindrome2).toEqual(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("Should take a string as an argument and return a new string with the first letter of each word capitalized", ()=>{
      const capitalize = new Algo().capitalize(
        "capotalize every first word of the string."
      );
      expect(capitalize).toEqual("Capatilize Every First Word Of The String.")
    });
  });
});
