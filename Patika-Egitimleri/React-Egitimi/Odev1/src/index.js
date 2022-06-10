import getData from './App';

(async()=>{
  const user=await getData(1);
  console.log(user);
})();