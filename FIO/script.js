function enterData() {
    var name = prompt('What is your name?', '');
    var lastName = prompt('What is your  last name?', '');
    var years = prompt('Enter your date of birth', '');
    var city = prompt('Enter city', '');
    return lastName + ' ' + name + '\n ' + years + '\n ' + city;
}
document.writeln(enterData()); 