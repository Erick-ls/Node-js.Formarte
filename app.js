
////const {getUserById} = require('./js-fundation/03-callbacks');

//console.log(templateExposts.emailTemplate);

//const id = 1

//getUserById (id,function(error, user){
    //if(error) {
      //  throw new Error (error);
    //}
   //console.log({user});
//});

const getPokemonId = require('./js-fundation/06-Promises');

getPokemonId()
.then ((pokemon) => console.log ({pokemon}));



//const { getAge,getId } = require('../src/js-fundation/plugins/index');

//const {builMakePerson} = require ('./js-fundation/05-factory_Fuctions');
//const makePerson = builMakePerson ({getAge, getId});
////const getAge = require('./js-fundation/plugins/get-Age.plugin')
//const { getId } = require('./js-fundation/plugins/get-uuidv4.plugin')

//const obj = { name: 'jhon ', bhirdate:'2007-10-20'};

//const jhon = makePerson (obj);
//console.log({jhon})
//echo "# Node-js.Formarte" >> README.md
