const User = {
    student1:{
        name: 'Richard',
        age: 10
    },

    student2:{
        name: 'Airnoh',
        age: 11
    },

    student3:{
        name: 'Isaiah',
        age: 9
    },

    student4:{
        Firstname: 'Micheal',
        age: 7
    },

    student5:{
        name: 'Ubong',
        age: 8
    },

    student6:{
        name: 'jackson',
        age: 3
    }
}

const objkey = Object.keys(User).filter(key =>{
    return User[key].age > 8;
});

console.log(objkey);

const objprofile = Object.values(User).filter(value =>{
    return value.age == 8
})