import Card from "../Component/Card"

const page = ({params}) => {
  return (
    <div>
        {params.id}
      <Card/>
    </div>
  )
}

export default page;
