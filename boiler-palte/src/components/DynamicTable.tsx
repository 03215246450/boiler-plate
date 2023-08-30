import React, { useState } from "react";
import { ChangeEvent } from "react";

let tbdata = [
  {
    data1: <input type="text" placeholder="enter data in table"   />,
    data2: <input type="text" placeholder="enter data in table"  />,
    data3: <input type="text" placeholder="enter data in table"  />,
    data4: <input type="text" placeholder="enter data in table"  />,
    data5: <input type="text" placeholder="enter data in table" />
  }
]


function DynamicTable() {
  const [getValue, setgetValue] = useState("");

  let handleclickevent = (e:ChangeEvent<HTMLInputElement>) => {
    setgetValue(e.target.value)
  }

  return (
    <>
      {tbdata.map((tbd, i) => {
        return (
          <div>
            <table>
              <thead>
                <tbody>
               
                    <tr>
                      <td>{tbd.data1}</td>
                      <td>{tbd.data2}</td>
                      <td>{tbd.data3}</td>
                      <td>{tbd.data4}</td>
                      <td>{tbd.data5}</td>
                    </tr>
                 
                </tbody>
              </thead>
            </table>
            <button onClick={()=> handleclickevent}>add data in table</button>
          </div>
        );
      })}
    </>
  );
}

export default DynamicTable;
