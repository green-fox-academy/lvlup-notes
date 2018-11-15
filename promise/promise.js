
const titok = 'titok';
const error = 'auth err';

const auth = (secret) => (
    new Promise((resolve, reject) => {
        secret === 'cica' ? resolve(titok): reject(error)
    })
);

auth('cica')
  .then(res => console.log(res))
  .catch(err => console.log(err));

console.log('start')