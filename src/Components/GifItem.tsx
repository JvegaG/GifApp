import { ImagesProps } from "../Models/GifModels"


export const GifItem = ({id, imageUrl, title}: ImagesProps) => {
  return (
    <div className="card">
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
    </div>
  )
}
