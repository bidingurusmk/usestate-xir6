'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('Budi Hartanto');
  const handleChange = () =>{
    alert(`nama saya adalah ${name}`);
  }
  return (
    <div>
      <h1 className="text-3xl">Hallo!</h1>
      <p>My Name is {name}</p>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
}
