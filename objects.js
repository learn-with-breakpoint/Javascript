// in Js objects are the reference types

// example

let human = {
    name : "Karthik",
    age: 29,
    nationality : "Indian" 
}

// you can access the values using 2 format
console.log(human.name)
console.log(human["name"])

// you can re-assign the values using the same format as well
human.name = "Pravs"
console.log(human.name)

human['name'] = 'srishti'
console.log(human["name"])
