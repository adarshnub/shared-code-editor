
"use client"

import Landingpage from "@/components/shared/Landingpage";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";


 export interface Language {
  id: string;
  name: string;
 
}
export default function Home() {

  // const [languages, setLanguages] = useState<Language[]>([]);

  // useEffect(() => {
  //   async function fetchLanguages() {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://judge0-ce.p.rapidapi.com/statuses',
  //       headers: {
  //         'X-RapidAPI-Key': '6580f71d4dmshda50012c6563062p110bd2jsn492400795be4',
  //         'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       setLanguages(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchLanguages();
  // }, []);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Landingpage />
      {/* <div>
      <h1>Languages</h1>
      <ul>
        {languages.map((language) => (
          <>
          <li key={language.id}>{language.description}</li>
          <li key={language.id}>{language.id}</li>
          
          </>
        ))}
      </ul>
    </div> */}
    </main>
  );
}
