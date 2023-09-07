import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {list: [], name: '', comment: ''}

  changeInput = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  changeLike = id => {
    this.setState(pre => ({
      list: pre.list.map(each => {
        if (each.id === id) {
          return {...each, isTrue: !each.isTrue}
        }
        return each
      }),
    }))
  }

  addItem = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const item = {
      id: uuidv4(),
      name,
      comment,
      isTrue: false,
    }

    this.setState(pre => ({list: [...pre.list, item], name: '', comment: ''}))
  }

  deleteItem = id => {
    const {list} = this.state
    const filtered = list.filter(each => each.id !== id)

    this.setState({list: filtered})
  }

  render() {
    const {list, name, comment} = this.state
    const l = list.length
    return (
      <div className="container">
        <div>
          <div className="commentCard">
            <div className="content">
              <h1 className="heading">Comments</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="img"
              />
              <p className="para">Say something about 4.0 technologies</p>
              <form>
                <input
                  className="input"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.changeInput}
                />
                <textarea
                  className="input input_comment"
                  type="text"
                  placeholder="Your Comment"
                  value={comment}
                  onChange={this.changeComment}
                />
                <div>
                  <button type="button" onClick={this.addItem} className="btn">
                    Add Comment
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img2"
            />
          </div>
          <hr className="line" />
          <div className="flex">
            <p className="count">{l}</p>
            <p className="comments">Comments</p>
          </div>
          <ul className="list">
            {list.map((each, index) => (
              <CommentItem
                item={each}
                key={each.id}
                func={this.deleteItem}
                func2={this.changeLike}
                color={initialContainerBackgroundClassNames[index % 7]}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
