"use strict";
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
let studentId = 12345;
let studentName = "jinwon";
let age = 27;
let gender = "male";
let courseCompleted = false;
// 인터페이스
// 코드가 컴파일될 때 아무런 영향력이 없기때문에 타입스크립트 컴파일러가 js로 컴파일 할때 인터페이스 코드는 그냥 지워버림(그래서 js파일엔 없음)
// 즉 인터페이스는 작성중인 코드에대한 더 많은 정보를 타입스크립트에게 제공하기 위해서만 존재
let student1 = {
    studentId: 12345,
    studentName: "jinwon",
    // age: 27,  // interface에서 선택적 프로퍼티를 적용해서 age가 없어도 오류가 뜨지 않음 -------------------------------
    gender: "male",
    courseCompleted: false,
};
function getStudent(studentId) {
    return {
        studentId: 12345,
        studentName: "jinwon",
        // age: 27,  // 선택적 프로퍼티를 적용해서 age가 없어도 오류가 뜨지 않음
        // 인터페이스에 enum GenderType을 사용할시, gender: GnederType.female, 이런식으로 써야 함
        gender: 'male',
        courseCompleted: false,
    };
}
function saveStudent(Student) {
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
function TypeAliases(name) {
    // let totalCost: number;
    // let orderId: number | string;
    // 이렇게 타입의 조합자체에 변수를 할당하면
    let totalCost;
    let orderId;
    const calculateTotalCost = (price, qty) => {
    };
    const findOderId = (customer, productId) => {
        return orderId;
    };
    // 일케 보기 쉽게 가능함
}
;
function TypeGuard(value) {
    let itemPrice;
    const setItemPrice = (price) => {
        // itemPrice = price;
        // 달랑 이것만 써놓으면 itemPrice에 에러가 뜨는데, price 매개변수가 number가 될 수도 있고, string이 될 수도 있기 떄문이다.
        // 이럴 때 js의 내장 함수인 type fo Operator를 사용한다. typeof와 조건문을 함께 사용함으로써 문제가 되는 코드를 아래와 같이 고칠 수 있다.
        if (typeof price === 'string') { // price가 string타입일 경우
            itemPrice = 0;
        }
        else {
            itemPrice = price;
        }
        // 유니언타입을 사용할 때, typeof를 사용하여 코드 검증을 실행하는 것, 이것을 타입스크립트에서 타입가드라고 한다.
    };
    setItemPrice(50);
}
