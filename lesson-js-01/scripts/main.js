console.log ('From external script');
//console.info('From info');
/*dkfjgdkjf*//*sgksdfhgjsdg*/
console.error('AAAAAAAA!!!!Error!!!!'); //sdfgsdfg
var num = 123323232;
var string = 'строка';
var nullVar = null;
var undefinedVar = undefined;
var bool = true;

var obj = {
    name: 'Petro',
    surname: 'Poroshenko',
    job: 'President',
    age: '50',
    isUkrainian: true
};

console.log(num, string, nullVar, undefinedVar, bool, obj);

var confirm = confirm('Are you ahuel volchara?');
console.log(confirm);
var defaultName = 'Volchara'
var prompt = prompt('you so seriously?' ,defaultName);
console.log(prompt);
if (1>2) {
    console.log('Pravda 1>2');
}
else if (1 === 2) {
    console.log('Pravda 1=2');
}
else {
    console.log('ne pravda');
}
var is18 = confirm('VAm uje 18?');

if (is18) {
    var name = prompt('whats you name');
    alert('Uvajaemiy,' +name + '! lol');

} else  {
    alert('soryan');
}



