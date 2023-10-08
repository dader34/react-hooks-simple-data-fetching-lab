import { useEffect, useState } from "react";
import DogImg from "./DogImg";

const App = () =>{
    const [dogImg,setDogImg] = useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => setDogImg(data.message))
    },[])

    return(
        dogImg ? <DogImg src={dogImg}/> : <p>Loading...</p>
    )

}

export default App;