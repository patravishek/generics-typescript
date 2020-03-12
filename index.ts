function greeter<T>(person: T) : T{
    return person;
}

console.log(greeter('Avishek'));
console.log(greeter(1));
console.log(greeter(1.4));
