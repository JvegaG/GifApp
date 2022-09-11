import { ImagesProps } from "../Models/GiftModels"


export const GiftItem = ({id, imageUrl, title}: ImagesProps) => {
  return (
    <div className="card">
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
    </div>
  )
}
