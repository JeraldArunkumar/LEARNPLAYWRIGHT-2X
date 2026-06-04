//string conversion
//String() - it will convert the given value to a string
(200).toString() //it will convert the number 200 to a string '200'
(123.45).toString() //it will convert the number 123.45 to a string '123.45'
(true).toString() //it will convert the boolean value true to a string 'true'
(false).toString() //it will convert the boolean value false to a string 'false'
(null).toString() //it will throw an error because null cannot be converted to a string
(undefined).toString() //it will throw an error because undefined cannot be converted to a string   

number('123') //it will convert the string '123' to a number 123
number('123.45') //it will convert the string '123.45' to a number 123.45
number('abc') //it will return NaN because 'abc' cannot be converted to a number    


parseInt('123') //it will convert the string '123' to a number 123
parseFloat  ('123.45') //it will convert the string '123.45' to a number 123.45   