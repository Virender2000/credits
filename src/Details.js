import React, { useEffect, useState } from "react";
import { db } from "./Firebase";

const Details = (props) => {
  const [flag, setFlag] = useState(false);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    db.collection("credits")
      .orderBy("Name")
      .onSnapshot((snapshot) => {
        setDetail(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.map((doc)=>{
          if(doc.data().empid===props.user)
              {console.log("foundddd" + doc.data().empid);
              setFlag(true);}
        });
          console.log("hello  "+snapshot.docs.map((doc)=>doc.data().empid));
      }
      
      );
  }, []);
console.log(flag);
 let output=<div><h1>No user found</h1></div>;
 if(flag==true){
  output= detail.map(({ Age, Desgination, Name, empid }) => {
    if (flag===true && empid===props.user) {
      return (
        <div class="card" style={{width: '18rem'}} key="empid">
          <img class="card-img-top" src="data:image/png;base64,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" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Intern Details</h5>
            <p class="card-text">
              Name : {Name}
            </p>
            <p class="card-text">
              Age : {Age}
            </p>
            <p class="card-text">
              Designation : {Desgination}
            </p>
          </div>
          
        </div>
      );
    }
  });
 }

console.log(output);
  return (
    <>
      <div >
        {output}
      </div>
    </>
  );
};
export default Details;

