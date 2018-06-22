import axios from "axios";

export const fetchFilmData = () => {
  return axios
    .get("http://51.140.159.46/ACPD/API/course/1")
    .then(response => {
      console.log('response: ', response.data[0].Modules);
      return response.data[0].Modules; 
    })
    .catch(error => {
      return error
    });
};

// export const fetchPerson = (url) => {
//   return axios
//     .get(url)
//     .then(response => {
//       console.log('person response', response.data.name);
//       return response.data.name
//     })
//     .catch(error => {
//       return error
//     });
// };
