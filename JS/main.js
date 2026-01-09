/*
let fname= 'John'
console.log('name',fname)
const idcard ='123'

let age= 30
let height= 150.5
const pi=3.14
fname='Tom'

idcard='456'

console.log('idcard',idcard)

console.log('Name',fname, 'age',age)
*/

/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>=มากกว่าเท่ากับ
<= น้อยกว่าเท่ากับ
< น้อยกว่า
*/

/*
let number1=5
let number2=3


let condition1=number1<=number2//Boolean (True,False)

console.log('Condition is=',condition1)


//if-else condition
if (number1>=number2){
    console.log('this if')
}else if (number1==number2) {
    console.log('this else if')
}else {
    console.log('this else')
}
*/

/*
Grade
>=80 A
>=70 B
>=60 C
>=50 D
*/

/*
let score=55
if(score>=80){
    console.log('Grade : A')
}else if(score>=70) {
    console.log('Grade : B')
}else if(score>=60) {
    console.log('Grade : C')
}else if(score>=50) {
    console.log('Grade : D')
}else{
    console.log('Grade : F')
}
*/

/*
&& และ
|| หรือ
! not
*/

/*
let number1=5
let number2=10

let condition=!(number1>=3 || number2>=11)
console.log('result of condition',condition)
*/

/*
let number = 20
if (!number%2==0){
    console.log('you are event.')
}
 */

/*
For
*/

/*
let counter =0

while (counter<=10){
    console.log('Hi')
    1.//counter=counter+1
    2.//counter+=1
    3.//counter++
}
for(let counter=0;counter<10;counter++){
    counter=log('Hi')
}
 */

/*
array
*/

/*
let age1=20
let age2=25
let age3=30

//แทนที่
let ages=[20,25,30]
ages=[200]

console.log('age1 age2 age3',age1,age2,age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
console.log('array',ages)

//ต่อArray
ages.push(25)
console.log('push array',ages)
//ลบ Array ตัวสุดท้าย
ages.pop()
console.log('pop array',ages)

ages=[50,20,25,30,35,40]

ages.sort()
console.log(ages)

let name_list=['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('name_list',name_list.length)
console.log('name_list',name_list[0])
console.log('name_list',name_list[1])
console.log('name_list',name_list[2])

for(let index =0; index<name_list.length;index++){
    console.log('namw_list :',name_list[index])
}
*/

/*
object
*/

/*
let student =[{
    age:30,
    name:'aa',
    grade:'A'
},{
    age:35
    name:'bb'
    grade:'B'
}]
student.push[{
    age:40
    name:'cc',
    grade:'C'
}]

//pop
student.pop()

console.log(studnt)
console.log(student.age)
console.log(student.name)
console.log(student.grade)

for (let index=0;index<student.length;index++){
    console.log('Student Number',(index+1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}
//Funtion
let score1=55
let score2=65

let grade=''

funtion calculat_grade(score){
if (score>=80){
    grade='A'
} else if (score>=70){
    grade='B'
} else if (score>=60){
    grade='C'
} else if (score>=50){
    grade='D'
} else{
    grade='F'
}
return grade
}

//เรียกใช้ฟังชั่น
let grade1=calculat_grade(score1)
console.log('Grade',grade1)
*/

/*
array
*/

/*
let score=[20,30,40,50]

for(let index=0;index<score.length;index++){
    console.log('score',score[index])
}

let newScore=score.filter((s) =>{
    return s>=30
})
    if (score[index]>=30){
        newScore.push(score[index])
    }

newScore.forEach((ns)=> {
    console.log('New Score',ns)
})

score[0]=score[0]*2
score[1]=score[1]*2
score[2]=score[2]*2
score[3]=score[3]*2

score=score.map((s) =>{
    return s*2
})

score.forEach((s)=>{
    console.log('forEach Score',s)

})

let students=[
    {
        name:'aa',
        score:50,
        grade:'A'
    },{
        name:'bb',
        score:80,
        grade:'A'
    }
]

let student= student.find((s)=>{
    if (s.name=='aa'){
        return true
    }
})

let double_score=students.map((s)=>{
    s.score=s.score*2
    return s
})

let hightScore=students.filter((s)=>{
    if(s.score>=120){
        return true

    }
})

console.log(student)
console.log('Double score',doubleScore)
console.log('High score',highScore)
*/
