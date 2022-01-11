
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


// enum ------------------------------------------------------------------


// enum GencderType {
//   male,
//   female,
//   genderNeutral,
// }
// js로 컴파일 되면 0부터 순차적으로 증가하는 숫자가 할당되었는데,
// 그건 enum의 특징으로, enum안에 선언된 요소들은 순서대로(자동으로) 숫자를 가지게 된다.
// 숫자 열거형, Nymeric Enum

// enum GencderType {
//   male = 'male',
//   female = 'femal',
//   genderNeutral = 'genderNeautral',
// }
// 문자열 열거형, 이렇게 하면 요소들마다 원하는 값을 넣을 수 있음. 숫자 열거형보다 보기 편한 게 장점.



// 타입 명시
// 문법 let x:string = "문자열";
let studentId:number = 12345;
let studentName:string = "jinwon";
let age:number = 27;
let gender:string = "male";
let courseCompleted:boolean = false;


// 타입이 한 번 정해진 변수는 항상 같은 타입을 가져야함.


interface Student{
  readonly studentId:Number; // readonly = 읽기 전용 프로퍼티로 설정
  studentName:String;
  age?:Number; 
  // 인터페이스 안에서는 ?:(옵셔널 기호라고 함) 로 선택적 프로퍼티로 사용할 수가 있다.(있어도 되고, 없어도 되는 값으로 취급받음) -----------------------------------------
  gender: 'male' | 'female' | 'genderNeatral';
  // 리터럴 타입이다. enum을 사용했을 때와 똑같은 동작을 함, 세 개 중에 하나의 값만 가질 수 있는 상태다 --------------------------------------------------

  // enum : 연관된 아이템들을 함께 묶어서 표현할 수 있는 수단 (위에 있음)
  courseCompleted:Boolean;
  // 인터페이스 내에서 메서드를 정의 ----------------------------------------------------------
  // addComment (comment:string): string;
  addComment?: (Comment:string) => string;
  // 위 두가지는 같은 일을 함. 두가지 표현식이 있을 뿐이다.
}
// 인터페이스
// 코드가 컴파일될 때 아무런 영향력이 없기때문에 타입스크립트 컴파일러가 js로 컴파일 할때 인터페이스 코드는 그냥 지워버림(그래서 js파일엔 없음)
// 즉 인터페이스는 작성중인 코드에대한 더 많은 정보를 타입스크립트에게 제공하기 위해서만 존재

let student1: Student = {
  studentId: 12345,
  studentName: "jinwon",
  // age: 27,  // interface에서 선택적 프로퍼티를 적용해서 age가 없어도 오류가 뜨지 않음 -------------------------------
  gender: "male",
  courseCompleted: false,
}


function getStudent(studentId:number):Student{ // 반환될 값은 interface Student와 같은 값을 가져야만 함
  return {
    studentId: 12345,
    studentName: "jinwon",
    // age: 27,  // 선택적 프로퍼티를 적용해서 age가 없어도 오류가 뜨지 않음
    // 인터페이스에 enum GenderType을 사용할시, gender: GnederType.female, 이런식으로 써야 함
    gender: 'male',
    courseCompleted: false,
  }
}

function saveStudent(Student:Student):void { // 아무것도 반환하지 않기떄문에 void를 명시
  // Student.studentId = 11222; // 읽기 전용 프로퍼티이기 떄문에 읽을수만 있고 새로운 값이 할당될 수 없다
}

saveStudent(student1);

// let something:any;
// // any 타입 : 뭐든지 들어가도 됨
// // 문자열을 할당하든, 불린값을 할당하든 상관없음.
// // 타입스크립트는 타입 명시를 하는 게 좋음. any는 자주 사용하지 않는 게 좋다

// let something2: number | string;
// // 유니언타입, number,string 다 허용한다는 뜻
// let price: number | string | boolean;
// price = false;

function TypeAliases(name:string):void { // TypeAliases를 보기 편하게 정리하기 위한 블럭
  
  // let totalCost: number;
  // let orderId: number | string;

  // const calculateTotalCost = (price : number | string,qty:number):void => { // 함수에서 void는 아무것도 반환하지 않을 때 명시해줘야 함.

  // };

  // const findOderId = (customer: { customerId: number | string, 
  // name: string}, productId: number | string) : number | string => {
  //   return orderId;
  // }
  // 위와 같은 코드가 있을 때, number | string은 상당히 많이 중복된다.
  // 이 경우 똑같은 코드를 반복해서 쓰는 것 보다는 이러한 조합 자체를 타입으로 지정하고 코드를 재활용 할 수 있게해야 한다.
  // 이럴 때 쓰는 게 Type Aliases이다. 아래와 같이 쓸 수 있음.

  type strOrNum = number | string;
  // 이렇게 타입의 조합자체에 변수를 할당하면
  let totalCost: number;
  let orderId: strOrNum;

  const calculateTotalCost = (price : strOrNum,qty:number):void => { // 함수에서 void는 아무것도 반환하지 않을 때 명시해줘야 함.

  };

  const findOderId = (customer: { customerId: strOrNum, 
  name: string}, productId: strOrNum) :strOrNum => {
    return orderId;
  }
  // 일케 보기 쉽게 가능함
};

function TypeGuard(value:number):void{

  type StrOrNum = string | number;
  let itemPrice: number;

  const setItemPrice = (price:StrOrNum): void => { // TypeGuard를 보기 편하게 정리하기 위한 블럭
    // itemPrice = price;
    // 달랑 이것만 써놓으면 itemPrice에 에러가 뜨는데, price 매개변수가 number가 될 수도 있고, string이 될 수도 있기 떄문이다.
    // 이럴 때 js의 내장 함수인 type fo Operator를 사용한다. typeof와 조건문을 함께 사용함으로써 문제가 되는 코드를 아래와 같이 고칠 수 있다.
    if (typeof price === 'string') { // price가 string타입일 경우
      itemPrice = 0;
    } else {
      itemPrice = price;
    }

    // 유니언타입을 사용할 때, typeof를 사용하여 코드 검증을 실행하는 것, 이것을 타입스크립트에서 타입가드라고 한다.
  };
  setItemPrice(50);
}


