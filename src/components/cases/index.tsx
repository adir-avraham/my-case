import React, { useState } from 'react';
import { cases } from '../../data/data';


export default function Cases() {

  const initialState = {
    caseId: Math.random(),
    caseName: "",
    caseTasks: "",
    nextDate: new Date().toLocaleDateString("uk"),
    status: true,
  }

  const [caseName, setCaseName] = useState("");
  const [caseTasks, setCaseTasks] = useState("");
  const [cases1, setCases] = useState(cases);
  function saveCase () {
    cases.push({
      caseId: Math.random(),
      caseName: caseName,
      caseTasks: caseTasks,
      nextDate: new Date().toLocaleDateString("uk"),
      status: true,
    })
    setCases(cases)
  }

return (
    <>
    <h1 className="text-center py-5">רשימת תיקים</h1>
    <div className="container">

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  הוספת תיק חדש
</button>


<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">הוספת תיק חדש</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">שם תיק:</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e: any)=>{setCaseName(e.target.value)} }/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">משימות:</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} onChange={(e: any)=>{setCaseTasks(e.target.value)}}></textarea>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">מועד דיון:</label>
  <input type="date" className="form-control" id="exampleFormControlInput1"/>
</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">בטל</button>
        <button type="button" className="btn btn-primary" onClick={saveCase}>שמור</button>
      </div>
    </div>
  </div>
</div>
        <table className="table table-bordered table-hover my-5">
  <thead>
    <tr>
      <th scope="col">תיק</th>
      <th scope="col">משימות</th>
      <th scope="col">מועד דיון</th>
      <th scope="col">סטטוס</th>
    </tr>
  </thead>
  <tbody>
  {cases.map((item: any) => (
    <tr key={item.caseId}>
    <th scope="row">{item.caseName}</th>
    <td>{item.caseTasks}</td>
    <td>{item.nextDate}</td>
    <td>  
    
  {item.status ? "פעיל" : "סגור"}

    </td>
  </tr>

          ))}
 
  </tbody>
</table>
    </div>
</>
)


}