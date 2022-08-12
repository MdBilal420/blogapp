import axios from 'axios';
import { useQuery } from 'react-query';

//const url = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res).catch((err) => console.log(err));
}

export default function useUsers()  {
    return useQuery(['users'], fetchUsers);
}

