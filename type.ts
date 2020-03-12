function genericType<T>(arg: T): T {
    return arg;
}

let myType: <T>(arg: T) => T = genericType;