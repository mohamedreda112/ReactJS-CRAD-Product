import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard/ProductCard"
import Modal from "./components/UI/Modal"
import { formInputsList, productList } from "./data"
import Button from "./components/UI/Button"
import Input from "./components/UI/Input"
import { IProduct } from "./interfaces"
import { productValidation } from "./validation"
import ErrorMessage from "./components/Error/ErrorMessage"

const App = () => {
  const defaultProductObj = {
    title:'',
    description:'',
    imageURL:'',
    price:'',
    colors:[],
    category:{
      name: "",
      imageURL: ""
    },
  }
  /*-------------- STATE ----------------*/
  const [product, setProduct] = useState<IProduct>(defaultProductObj)
  const [isOpen, setIsOpen] = useState(false)
  const [errors , setErrors] = useState({title:'',
    description:'',
    imageURL:'',
    price:'',
  })

    console.log(errors)

  
  /*-------------- HANDLER ----------------*/
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;

    setProduct({
      ...product,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:''
    })
  }

  const onCancel = () => {
    setProduct(defaultProductObj)
    closeModal()
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const {title, description, price, imageURL} = product

    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    })


    const hasErrorMsg = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '')

    if (!hasErrorMsg) {
      setErrors(errors)
      return;
    }
    console.log("done")
  }






  //--------------------- Render
  const renderProductList = productList.map(product=> <ProductCard key={product.id} product={product}/>)
  const renderFormInputList = formInputsList.map(input => 
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler}/>
      <ErrorMessage massage={errors[input.name]}/>
    </div>
  )
  



  return (
    <main className="container">
          <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>Add </Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
            <Button className="bg-gray-400 hover:bg-gray-500 " onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  )
}

export default App ;