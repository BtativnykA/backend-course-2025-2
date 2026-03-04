// Варіант 3: JPY, 27 січня 2024
const currency = 'JPY';
const exact_date = '20240127';

const baseURL = 'https://bank.gov.ua/';

const url = new URL(baseURL);

url.pathname = '/NBU_Exchange/exchange_site';

url.searchParams.append('valcode', currency);
url.searchParams.append('date', exact_date);
url.searchParams.append('json', '');

console.log('Сконструйований URL:');
console.log(url.toString());


console.log('\nВиконую запит до НБУ...');

fetch(url.toString())
  .then(response => response.json())
  .then(data => {
    console.log('Отримані дані:');
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Помилка:', error.message);
  });