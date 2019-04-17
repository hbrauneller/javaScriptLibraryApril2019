let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//                0           1           2            3         4

console.log(weekDays.toString());
console.log(weekdays[3]);

let soup = {
    a = 'chicken noodle',
    b = 'tomato',
    c = 'beef and barley'
}
console.log(soup.c);

//array and object literals can hold primitive and 'complex' types (arrays, object, function)
let complexArrayLiteral = [1, true, 'Academy', [1, 2, 3], {key: 'test'}, fuction(){return 'yes'}];
//                         0    1       2           3           4           5
console.log(complexArrayLiteral[5]);
console.log(complexArrayLiteral [3]);

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return}};
console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);
