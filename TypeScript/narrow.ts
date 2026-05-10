export{}

function checkType(value: string | number){
    let result: string = " "
    if(typeof value === "string"){
        result = `The value is a string: ${value.toUpperCase()}`
    }else{
        result = `The value is a number: ${value}`
    }
    document.getElementById('output')!.innerHTML = result;
}

class Dog{
    eat(){
        return " Dog is eating "
    }
}

class Cat{
    sleep(){
        return " Cat is sleepy "
    }
}

function checkAnimal(){
    let animal: Dog | Cat = Math.random() > 0.5 ? new Dog(): new Cat()
    let message = " "
    if(animal instanceof Dog){
        message = animal.eat()
    }
    else{
        message = animal.sleep()
    }

    document.getElementById('output')!.innerHTML = message
}

//! MAKE FUNCTION GLOBAL
(window as any).checkType = checkType;
(window as any).checkAnimal = checkAnimal;