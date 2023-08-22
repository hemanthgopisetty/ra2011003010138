import Card from "../Component/Card"
import { options } from "../authTokens/tokens";
const page = async ({params}) => {
  const url = `http://20.244.56.144:80/train/trains/${params.id}`;
  const response = await fetch(url,options);
  const data     = await response.json();
  return (
    <div>
      <Card e={data}/>
    </div>
  )
}

export default page;
