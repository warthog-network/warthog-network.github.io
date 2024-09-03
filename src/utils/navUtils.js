import { useState, useEffect } from 'react';
const useNavutils = () => {

  

  const [windowDim, setWindowDim] = useState  ({
      winWidth:window.innerWidth,
      
      });
      
      const detectSize = () =>{
          setWindowDim({
              winWidth:window.innerWidth,
          })
      }
      
      useEffect(()=>{
      window.addEventListener('resize', detectSize)
      
      return()=>{
          window.removeEventListener('resize', detectSize)
      }
      },[windowDim])

return (
   windowDim
)


    }

export default useNavutils;