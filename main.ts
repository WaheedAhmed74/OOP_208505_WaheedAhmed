/* 
    myName : string =  "Waheed Ahmed"
    myRollNo: number = 000208505
    myEmailId: string =  "waheedahmedsoomro@gmail.com"
    myDaySlot: string = "Saturday (07:00 - 10:00)"
*/

class Person { // create a class of Person
  personality: string = "Mystery";

  constructor(personality: string) { // create a constructor
      this.personality = personality;
  }

  askQuestion(ans: number): void { // create a method
      if (ans === 1) {
          this.personality = "Extravert"; // if the answer is 1 return Extravert
      } else {
          this.personality = "Introvert"; // except 1 it will return Introvert
      }
  }
}

let person = new Person("Mystery"); // initialise person
person.askQuestion(1); // This will set personality to "Extravert"
console.log(person.personality); // Output: Extravert
