import {Component} from 'react'

import FeedBackItem from '../FeedBackItem'

import './index.css'

class Feedback extends Component {
  state = {isFeedBackSelected: false, SelectedImageId: null}

  ShowImageId = imageId => {
    this.setState({isFeedBackSelected: true, SelectedImageId: imageId})
  }

  hideImageMessage = () => {
    this.setState({isFeedBackSelected: false, SelectedImageId: null})
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {isFeedBackSelected, SelectedImageId} = this.state

    return (
      <div className="main-container">
        <div className="small-container">
          <h1 className="support-head">
            how satisfy are you with our customer care support Performance?
          </h1>
          <ul>
            {emojis.map((each, index) => (
              <FeedBackItem
                keys={index}
                onClick={() => this.ShowImageId(index)}
                resources={{emoji: each}}
              />
            ))}
          </ul>
        </div>

        {isFeedBackSelected && SelectedImageId === 2 && (
          <div className="small-card">
            <h1>Thankyou</h1>
            <p>This is the message for image 3 (ID 2).</p>
            <button onClick={this.hideImageMessage} type="button">
              Close
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
