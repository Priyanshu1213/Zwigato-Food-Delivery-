import React, { useEffect, useState } from 'react'
import Cartlog from './Cartlog/Cartlog';
import axios from "axios"
import "./MapforCartlog.css"
import Filtter from './Filtter/Filtter';

export default function MapforCartlog() {
  
    const [data,setData]= useState([]);
    const [products, setProducts] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    const [filt,setFilt]= useState("");


    useEffect(()=>{
  const temp=async ()=>{
    try {
        const fetcheddata=(await axios.get('http://localhost:5000/api/getdetails')).data
        setData(fetcheddata.response);
        setProducts(fetcheddata.response)
     
        
    } catch (error) {
        console.log(error)
    }
     
  } 
  temp()

    },[])
    console.log(data)
    
    
    const handleCallback = (childData ) => {
      setFilt(childData)
      const filtter = products.filter((item) => item.foodcategary.toLowerCase().includes(filt.toLowerCase()));
      setData(filtter)

    }
    console.log(filt)
    


    // function handleSearchClick() {
    //   if (searchVal === '') {
    //     setData(products); // Reset to show all data
    //   } else {
    //     const filterBySearch = products.filter((item) => item.foodname.toLowerCase().includes(searchVal.toLowerCase()));
    //     setData(filterBySearch);
    //   }
    // };
    // console.log(products)
    
    
  const filterBySearch = (event) => {
    const query =event.target.value;
    setSearchVal(query)
    
    if(query ===''&&filt===''){
      setData(products)
    }
    else{
      const filterlist = products.filter((item) => item.foodname.toLowerCase().includes(searchVal.toLowerCase()) );
      
      setData(filterlist);
      
    }
    
  };
  console.log(products)
  
  
  
  return (
    <>

    {/* <div className="search-header">
                <input type='search' placeholder='Search...' onChange={e => setSearchVal(e.target.value)}>
                </input>
                <p  onClick={handleSearchClick}>Q</p>
                
            </div> */}


<Filtter parentCallback={handleCallback}/>


<div className="search-header">
        
        <input type='search' placeholder='Search...' id="search-box" value={searchVal} onChange={filterBySearch} />
      </div>

            
      {data.length<=0 ?
      ( <h1>No Data Found</h1> ):
      (
           <div className='Map1'>
           {data.map(item=>
           <Cartlog   priya={item} />
           )}
           </div>
      )
      }      
    

    </>
  )
}
