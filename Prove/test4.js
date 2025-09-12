function checkUserAge(age) {
    if (age >= 18) {
        return "You are an adult.";
    } else {
        return "You are a minor.";
    }
}

console.log(checkUserAge(20));
console.log(checkUserAge(16));