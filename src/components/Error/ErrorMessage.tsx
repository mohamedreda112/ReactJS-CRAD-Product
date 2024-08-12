interface IProps {
  massage:string;
}


const ErrorMessage = ({massage}: IProps) => {
  return massage ? <span className="block text-red-700 font-semibold text-sm">{massage}</span> : null
  
}

export default ErrorMessage