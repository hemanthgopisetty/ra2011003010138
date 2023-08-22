import { options } from "../../authTokens/tokens";
import Card from "@/app/Component/Card";
const page = async ({params}) => {
  const url = `http://20.244.56.144:80/train/trains/${params.id}`;
  const response = await fetch(url,options);
  const data     = await response.json();
  return (
      <Card e={data}/>
  )
}

export default page;
