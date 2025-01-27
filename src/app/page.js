"use client"
import Third from "@/components/Third-Page";
import Second from "@/components/Second-Page";
import { useState } from "react";
import First from "@/components/First-Page";
import Final from "@/components/Final-Page";

export default function Home() {
  const [page, setPage] = useState(1);
  return (
   <>
   {page == 1 ? <First setPage={setPage} /> : <></>}
        {page == 2 ? <Second setPage={setPage} /> : <></>}
        {page == 3 ? <Third setPage={setPage} /> : <></>}
        {page == 4 ? <Final setPage={setPage} /> : <></>}
   </>
  );
}
