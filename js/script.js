const a = document.querySelector('a')
// const a = document.getElementsByTagName('a')
// console.log(a);
a.setAttribute('href', 'https://www.google.co.th')
a.setAttribute('target', '_blank')

const crru = document.getElementById('crru')
console.log(crru);
crru.innerHTML = '<br> Go to CRRU'
crru.setAttribute('href', 'https://www.crru.ac.th')
crru.setAttribute('target', '_blank')

const result = { first_name: "Nat", last_name: "Nopphawong" }
const fullName = `${result.first_name} ${result.last_name}`

const p = document.querySelector('p')
p.innerHTML = fullName