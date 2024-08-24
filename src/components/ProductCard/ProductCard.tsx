import { IProduct } from "../../interfaces"
import { textSlicer } from "../../Utils/functions";
import CircleColor from "../circleColor/CircleColor";
import Image from "../ImageCom/Image"
import Button from "../UI/Button"

interface IProps {
  product:IProduct;
  setProductToEdit: (product: IProduct)=> void;
  openEditModal: () => void;
  setProductToEditIdx: (value:number)=> void;
  idx:number;
  openConfirmModal: ()=> void;
}


const ProductCard = ({product, setProductToEdit, openEditModal, idx, setProductToEditIdx, openConfirmModal}: IProps) => {
  const {title, description, imageURL, price, category, colors} = product

  // RENDER //
  const renderProductColors = colors.map( color =>  <CircleColor key={color} color={color}/>);
  
  // HANDLER //
  const onEdit =() => {
    setProductToEdit(product)
    openEditModal()
    setProductToEditIdx(idx)
  }
  
  
  const onRemove = () => {
    setProductToEdit(product)
    openConfirmModal();
  }


  return (
    <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col justify-between">
      <Image
        imageURL={imageURL}
        alt="product name"
        className="rounded-md mb-2"
      />
      <h3>{title}</h3>

      <p>{textSlicer(description)}</p>

      {/* <div className="flex items-center space-x-1 flex-wrap">
        {renderProductColors}
      </div> */}
      <div className="flex items-center space-x-1 flex-wrap my-1">
        {!colors.length ? <p className="min-h-[20px] font-medium">Not avaliable colors!</p> : renderProductColors}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-blue-600 font-bold">${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 " onClick={()=> {
          onEdit()
        }}>Edit</Button>
        <Button className="bg-red-700 " onClick={onRemove}>Remove</Button>
      </div>
    </div>
  )
}

export default ProductCard