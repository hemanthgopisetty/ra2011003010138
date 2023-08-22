import Link from "next/link";
import Card from "./Component/Card";
import { options } from "./authTokens/tokens";
export default async function Home() {
  const url = 'http://20.244.56.144:80/train/trains';
  const response = await fetch(url,options);
  const data     = await response.json();
  console.log(data);
  return (
      <div className="flex flex-col h-full w-full items-center justify-center gap-2">
        {data.map((e)=>{
          return(
            <Link href={`${e.trainNumber}`}>
              <Card e={e}/>
            </Link>
          )
        })}
      </div>
  )
}
