const jwt = require('jsonwebtoken');

const JWT_SECRET = '@TKen#2077';

/* Create JWT Sync */
const token = jwt.sign({data: {kelas: 'micro-service-web'}}, JWT_SECRET);
console.log(token); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoibWljcm8tc2VydmljZS13ZWIifSwiaWF0IjoxNzE2NDYwNzg4fQ.xqhEqU5zKWOZXh2WIS3lw9gqNH6RDHEfg9qK9E8Svhg

/* Create JWT Async */
// jwt.sign({data: {kelas: 'micro-service-web'}}, JWT_SECRET, (err, token) => {
//   console.log(token);
// });

/* Create Expired Time JWT Sync dan Async*/
/* Sync : */
// const token = jwt.sign({data: {kelas: 'micro-service-web'}}, JWT_SECRET, {
//   expiresIn: '1m',
// });
// console.log(token);

/* Async: */
// jwt.sign({data: {kelas: 'micro-service-web'}}, JWT_SECRET, {expiresIn: '3s'} , (err, tokenAsync) => {
//   console.log(tokenAsync);
// });

/* Verify Token */
/* Cara 1: */
jwt.verify(token, JWT_SECRET, (err, res) => {
  if(err){
    console.log(err.message);
    return;
  }
  
  console.log(res); //{ data: { kelas: 'micro-service-web' }, iat: 1716460788 }
});

/* Cara 2: */
// try {
//   const decoded = jwt.verify(token, JWT_SECRET);
//   console.log(decoded); 
// } catch (err) {
//   console.log(err.message);
// }
