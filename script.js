let school = [
    {
        teacher : [ 'james', 'steve', 'debby', 'douglas'],
        students: {
            class1 : [ 'hate', 'likes', 'shadow', 'enter'],
            class2 : ['solve' ,'get', 'deo', 'gentle'],
            class3 : [ 'went', 'down', 'sing', 'sang'],
            class4 : ['dawn', 'watch', 'dating', 'fine']
        }
    },
    {
        cleaners:['pen', 'pencil', 'elegant', 'beauty'],
        subject:['chemistry', 'biology', 'math', 'geology'],
    },
    {
        management: {
            principal: 'jones',
            'vice-principl': 'Mary',
            'board of trustess': 'chucks'
        }
    }
    // things to get in console.log
    // douglas
    // math
    // deo
    // chucks

]
console.log(school[0]. teacher[3])
console.log(school[1]. subject[2])
console.log(school[0]. students.class2[2])
console.log(school[2]. management["board of trustess"])





// funtion firstElem(array,n){
//     if (array ==null) return 'there is no array'
//     if(n==null) return array[0]
//     if(n < 0) return []:
//     return array.slice(0,n)
// }
// console.log(firstElem[8,3,7,3,4,7,9,0,2,3,5], 8)


// let str = prompt ('enter digits of numbers....')
// console.log(str);
// let result = [str[0]];
// for (lrt i = 1; i< str)