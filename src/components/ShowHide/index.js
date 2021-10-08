// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowSecondName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="nameContainer">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="name">Venkat</p>}
          </div>
          <div className="nameContainer">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowSecondName}
            >
              Show/Hide SecondName
            </button>
            {showLastName && <p className="name">Yashwanth</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
