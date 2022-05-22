import debounce from 'lodash.debounce';
import './css/styles.css';
import fetchCountries from "./fetchCountries" ;

const DEBOUNCE_DELAY = 300;
const input = document.querySelector(`#search-box`);
// console.log(input)
let textValue = ``;

input.addEventListener(`input`,debounce((e)=>{
    textValue = e.target.value.trim();
    fetchCountries(textValue);
console.log(textValue);
console.log(fetchCountries())
}, DEBOUNCE_DELAY )  ) 

