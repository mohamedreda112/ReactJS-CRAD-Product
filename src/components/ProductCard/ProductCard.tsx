import { IProduct } from "../../interfaces"
import { textSlicer } from "../../Utils/functions";
import CircleColor from "../circleColor/CircleColor";
import Image from "../ImageCom/Image"
import Button from "../UI/Button"

interface IProps {
  product:IProduct;
}


const ProductCard = ({product}: IProps) => {
  const {title, description, imageURL, price, category, colors} = product

  // RENDER //
  const renderProductColors = colors.map( color =>  <CircleColor key={color} color={color}/>);
  return (
    <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt="product name"
        className="rounded-md mb-2"
      />
      <h3>{title}</h3>

      <p>{textSlicer(description)}</p>

      <div className="flex items-center space-x-1 flex-wrap">
            {renderProductColors}
          </div>

      {/* <div className="flex items-center space-x-2 my-4">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-emerald-600 rounded-full cursor-pointer"/>
      </div> */}

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 " onClick={()=> {
          console.log("Mohamed")
        }}>Edit</Button>
        <Button className="bg-red-700 ">Destory</Button>
      </div>
    </div>
  )
}

export default ProductCard