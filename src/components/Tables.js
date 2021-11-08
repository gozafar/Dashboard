import React,{useState,useEffect} from 'react';

function Tables(props) {
    const [ list, setList] = useState([])

    useEffect(() => {
        

       fetch("http://localhost:3000/zafar").then((response) =>{
           response.json().then((result)=>{
               console.warn(result)
               setList(result);
           })
       })
    })
    console.log(list,"smting here");
    return (
        <div>
            <h1>Tables</h1>
            {
                list.map((item,i)=>{
                    return(
                        <div>
                            <p>{item.Name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
   
}

export default Tables;