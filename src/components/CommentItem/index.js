import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {item, color, func, func2} = props
  const {id, name, comment, isTrue} = item
  const deleteItem = () => {
    func(id)
  }
  const changeLike = () => {
    func2(id)
  }

  const liked = isTrue ? 'likeblue' : 'grey'
  const imageUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div className="flex">
        <p className={`logo ${color}`}>{name[0]}</p>
        <p className="name">{name}</p>
        <p className="time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="imageCard">
        <div className="likeCard">
          <button type="button" className="likebtn" onClick={changeLike}>
            <img src={imageUrl} alt="like" className="like" />
          </button>
          <p className={liked}> Like</p>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="deletebtn"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
