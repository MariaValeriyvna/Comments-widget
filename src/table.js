import React, { Component } from 'react'

// const TableHeader = () => {
//   //  return (
//   //   //  <thead key = "thead" >
//   //   //    <tr key = "thead-row">
//   //   //      <th key = "thead-name" className="thead__name">Автор</th>
//   //   //      <th key = "thead-text" className="thead__text">Комментарий</th>
//   //   //      <th key = "thead-date" className="thead__date">Дата</th>
//   //   //    </tr>
//   //   //  </thead>
//   //  )
// }
const TableBody = props => {
   return props.comments.map((comment, index) => {
      return(
         <tbody key={index.toString()}>
               <tr key = {index} >
                  <td key="name" className="td__name">{comment.name}</td>
                  <td key="text" className="td__text"><div className="td__text-div">{comment.text}</div></td>
                  <td key="date" className="td__date">{comment.date}</td>
                  <td key="btn"className="td-btn">
                  <button key="btn-del"className="btn-del" onClick={() => props.deletComment(index)}>Удалить</button>
                  </td>
               </tr>
         </tbody>
     )
 }
   )
}

 const Table =props=> {
  
      const {comments, deletComment} = props
      
     return (
       <table  className="table" key = 'index'>
         {/* <TableHeader key = "tablehead" /> */}
         <TableBody  key = 'tablebody' comments = {comments} deletComment = {deletComment}/>
       </table>
     )
   }

 
export default Table