// Reference: https://www.youtube.com/watch?v=Jl4q2cccwf0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=20
// Github: https://github.com/iamshaunjp/Complete-React-Tutorial/tree/lesson-20/dojo-blog/src
import {useState, useEffect} from 'react'

const useFetch = (url) => { //costume hook in react need to start with use
     const [data, setData] = useState(null);
     const [isPending, setIsPending] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => { //fecth data
          const abortCont = new AbortController();

          setTimeout(() => {
               fetch(url, {signal: abortCont.signal })
               .then(res => { // check data
                    console.log(res);
                    if(!res.ok) {
                         throw Error('Could not fetch the data for that resource');
                    }
                    return res.json()
               })
               .then(data => { // data is local variable
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
               })
               .catch(err => { //catch data not sending
                    console.log(err.message);
                    if(err.name === 'AbortError') {
                         console.log('fetch aborted');
                    } else {
                         setIsPending(false);
                         setError(err.message);
                    }
               })
          }, 1000)

          return () => abortCont.abort(); //Cleanup for unfinished fetch
     }, [url]); //empty dependency

     return { data, isPending, error};
}
 
export default useFetch;