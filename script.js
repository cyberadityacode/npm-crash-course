import axios from "axios";

// lets fetch data using fetch api
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

//We can also use axios
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response)=>{
    console.log(response.data);
  })
  