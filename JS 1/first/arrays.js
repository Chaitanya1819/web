//creating arrays

users =[
    'Chaitanya Bejjanki',
    'Virat kohli',
    'Ab Deviliers'
]
console.log(users)
console.log("Length:", users.length)

//accessing elements
console.log(users[0])
// for printing last element in a array in js 
console.log(users[users.length-1])

//adding and removing elements
users.push('Glenn Maxwell') //adding element uses push
console.log(users)
users.pop('Glenn Maxwell')
console.log(users)

//accessing all elements
//mapping
users.map(doc =>{
    console.log(doc)
})