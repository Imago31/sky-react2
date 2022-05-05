/* eslint-disable react/prefer-stateless-function */

// import React from "react";
// import ReactDOM from "react-dom";

// tip: чтобы встроить переменную в JSX используйте фигурные скобки {name}




// export default class extends React.Component {

    function AppLesson3() {
    
        const bookArr = [
          {"name":"JS for beginners","year":"2018","price":"1000"},
          {"name":"React for beginners","year":"2019","price":"1200"},
          {"name":"Vue for beginners","year":"2021","price":"1500"},
        ]
      
   
          return (
              bookArr.forEach((book)=>{
              <>
              <h2 key="book.name">{book.name}</h2>
              <p key="book.year">{book.year}</p>
              <p key="book.price">{book.price}</p>
              </>
              })
          )

      }
      
      
      export default AppLesson3