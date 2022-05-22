import debounce from 'lodash.debounce';
import './css/styles.css';
import {fetchCountries} from "./fetchCountries" ;

const DEBOUNCE_DELAY = 300;
const input = document.querySelector(`#search-box`);
const ul = document.querySelector(`.country-list`);
const div = document.querySelector(`.country-info`);

// console.log(input)
let textValue = ``;

input.addEventListener(`input`,debounce((e)=>{
    textValue = e.target.value.trim();
    if(!textValue){
    return
    }
    fetchCountries(textValue).then(listOfCountries => {
        if(listOfCountries.length > 10){
            console.log(`плохо`);  
        } else if(listOfCountries.length < 10 && listOfCountries.length > 2){
            console.log(`все ок`);
            listOfCountries.map(c => {`<li>
            <div></div>
            <p>${c.name}</p>
          </li>`;
        console.log(c)});
        }
        console.log(listOfCountries.length);
        
    });


    
}, DEBOUNCE_DELAY )  ) 

