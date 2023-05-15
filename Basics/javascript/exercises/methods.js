let users = []
let result;

// push() > insert new item
users.push('Hello world')
users.push(true)
users.push(1,2,3,4,5)
users.push(function(){})

// pop() > remove last item
users.pop()
users.pop()

// shift() remove first item
users.shift()

// unshift() insert item as first in arr
users.unshift('this is first item')

// fill 
users.fill('blabla',0,users.length)

result = users;
console.log(result)