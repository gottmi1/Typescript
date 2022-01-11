
// //타입 추론
// let a = 5;
// // 자바스크립트 기반 언어이기 떄문에 자바스크립트에서 유효한 코드는 타입스크립트에서도 유효함
// a = 10; 
// // 문자열을 넣으면 자동으로 에러가 뜸 

// // 타입추론떄문인데, 타입스크립트에서는 타입표기가 없는 경우 타입 정보를 제공하기 위해 타입을 추론함.
// // 변수를 선언할 때 자동으로 number 타입으로 제공된 것 이게 타입추론(타입 인퍼런스)
// // 오브젝트 안의 키도 마찬가지


// function carculate(lostPoints) {
//   return 100 - lostPoints;
// }
// // 이 경우 자동으로 (lostPoints: any) : number를 할당한다고 함
// // retrun값에서 -를 인식해서

// 타입 명시
// 문법 let x:string = "문자열";
let studentId:number = 12345;
let studentName:string = "jinwon";
let age:number = 27;
let gender:string = "male";
let courseCompleted:boolean = false;

// 타입이 한 번 정해진 변수는 항상 같은 타입을 가져야함.

let student1 = {
  studentId: 12345,
  studentName: "jinwon",
  // age: 27,  // 선택적 프로퍼티를 적용해서 age가 없어도 오류가 뜨지 않음
  gender: "male",
  courseCompleted: false,
}

// 인터페이스
// 코드가 컴파일될 때 아무런 영향력이 없기때문에 타입스크립트 컴파일러가 js로 컴파일 할때 인터페이스 코드는 그냥 지워버림
// 즉 인터페이스는 작성중인 코드에대한 더 많은 정보를 타입스크립트에게 제공하기위해 존재

interface Student{
  readonly studentId:Number;
  studentName:String;
  age?:Number; // 인터페이스 안에서는 ?:(옵셔널 기호라고 함) 로 선택적 프로퍼티로 사용할 수가 있다.(있어도 되고, 없어도 되는 값으로 취급받음)
  gender:String;
  courseCompleted:Boolean;
  // 인터페이스 내에서 메서드를 정의
  // addComment (comment:string): string;
  addComment?: (Comment:string) => string;
  // 위 두가지는 같은 일을 함. 두가지 표현식이 있을 뿐이다.
}

function getStudent(studentId:number):Student{ // 반환될 값은 interface Student와 같은 값을 가져야만 함
  return {
    studentId: 12345,
    studentName: "jinwon",
    // age: 27,  // 선택적 프로퍼티를 적용해서 age가 없어도 오류가 뜨지 않음
    gender: "male",
    courseCompleted: false,
  }
}

function saveStudent(Student:Student):void { // 아무것도 반환하지 않기떄문에 void를 명시
  // Student.studentId = 11222; // 읽기 전용 프로퍼티이기 떄문에 새로운 값이 할당될 수 없다

}

saveStudent(student1);

