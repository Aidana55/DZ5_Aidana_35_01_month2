function fullName ( lastName ,name, dadName){
    return (lastName +" "+name[0] + "."+dadName[0] + ".")
}

console.log(fullName(  "Abdimannaeva" ,"Aidana", "Nurmuhammedovna"))

const books =(arr)=>{
    let arrWithU = []
    let arrWithoutU =[]
    arr.forEach((item )=>{
            if(item.toLowerCase().includes("u")){
                arrWithU.push(item)
            }else{
                arrWithoutU.push(item)
            }
        }
    )
    console.log("with u : "+arrWithU)
    console.log("without u : "+arrWithoutU)
}
books([ "Маленткий принц", 'Гордость и предубеждение' , 'Виниваты звезды' , 'Каждому по заслугам'])




const nameDate = [
    {name: 'Noa', date: '02-01-2001'},
    {name: 'william', date: '07-08-2000'},
    {name: 'Olivia', date: '24-05-2019'},
    {name: 'Fernand', date: '17-04-2013'},
    {name: 'Milan', date: '12-09-1990'},
];
nameDate.forEach(name => {
    console.log(Пользователь ${name.name} родился ${name.date});
});
console.log(nameDate)


function palindrome(str){
    const string = str.toLowerCase()

    let stringWithoutSpaces = '';
    for (let i = 0; i < string.length; i++){
        if (string[i] !== ' '){
            stringWithoutSpaces += string[i];
        }
    }

    for (let i = 0; i < stringWithoutSpaces.length / 2; i++){
        if (stringWithoutSpaces[i] !== stringWithoutSpaces[stringWithoutSpaces.length - 1 - i]){
            return false;
        }
    }
    return true;
}

// Пример использования:
const userInput = prompt("Введите строку для проверки на палиндром:");
if (palindrome(userInput)) {
    alert("Это палиндром!");
} else {
    alert("Это не палиндром.");
}