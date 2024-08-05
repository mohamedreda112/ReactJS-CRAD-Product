interface IProps {
 imageURL: string;
 alt: string;
 className?: string;
}


const Image = ({imageURL, alt, className}: IProps) => {
  return (
    <div>
      <img src={imageURL} alt={alt} className={className}/>
    </div>
  )
}

export default Image