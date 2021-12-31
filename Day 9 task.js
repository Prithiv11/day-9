// Solving problems using array functions on rest countries data.


// Get all the countries from Asia continent /region using Filter function

const getcountries = ( ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send();
  
    xhr.responseType = "json";
    xhr.onload = ()=>{
        const countries = xhr.response;
            const asia = countries.filter((country)=>country.region=="Asia")
            .map((country)=>country.name.common)//if you want only names - uncomment this map.
        //    console.log("all the countries from Asia region");
           console.log("1. all the countries from Asia region" ,asia);
    };
  };
  getcountries();



// Get all the countries with a population of less than 2 lakhs using Filter function

const getcountries1 = ( ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send();
  
    xhr.responseType = "json";
    xhr.onload = ()=>{
        const countries = xhr.response;
        
            const pop = countries.filter((country)=>country.population<200000)
            .map((country)=>country.name.common)
            console.log("2. all the countries with a population of less than 2 lakhs",pop);
  
    };
  };
  getcountries1();


// Print the total population of countries using reduce function
const getcountries2 = ( ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send();
  
    xhr.responseType = "json";
    xhr.onload = ()=>{
        const countries = xhr.response;
  
        const Tpop = countries.map((country)=>country.population)
        .reduce((sum, cur)=>sum+cur)
        console.log("4. the total population of countries",Tpop);
  
    };
  };
  getcountries2();

// Print the country which uses US Dollars as currency.

const getcountries3 = ( ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send();
  
    xhr.responseType = "json";
    xhr.onload = ()=>{
        const countries = xhr.response;
            const usdlr = countries
            .filter((country)=>country.currencies && country.currencies.USD)
            .map((country)=>country.name.common)
            console.log("5. the country which uses US Dollars",usdlr);
  
    };
  };
  getcountries3();
  

  
// Print the following details name, capital, flag using forEach function 

// Note : in this program "Bouvet Island" ,"Macau" , "Antarctica" , "Heard Island and McDonald Islands" , "United States Minor Outlying Islands" this countries not included
// because these countries dont have capital
// if you want these countries you can take the last commented program

const getcountries5 = ( ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send();
  
    xhr.responseType = "json";
    xhr.onload = ()=>{
        const countries = xhr.response;
        console.log("3. name, capital, flag of all countries");
        
        countries.forEach((country) =>{
        if(country.name.common!="Bouvet Island" && country.name.common!="Macau" && country.name.common!="Antarctica" && country.name.common!="Heard Island and McDonald Islands" && country.name.common!="United States Minor Outlying Islands")
        return console.log("Name :",country.name.common," , ","Capital :",country.capital[0]," , ","Flag :",'"',country.flag,'"',country.flags.png)});
        
    };
};
getcountries5();




//  // Print the following details name, capital, flag using forEach function 
// const getcountries5 = ( ) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET","https://restcountries.com/v3.1/all")
//     xhr.send();
  
//     xhr.responseType = "json";
//     xhr.onload = ()=>{
//         const countries = xhr.response;
//         console.log("3. name, capital, flag of all countries");
        
//         countries.forEach((country) =>console.log("Name :",country.name.common," , ","Capital :",country.capital," , ","Flag :",'"',country.flag,'"',country.flags.png));
//     };
// };
// getcountries5();
