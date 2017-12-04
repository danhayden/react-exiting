import {Component} from 'react'
import throttle from 'lodash/throttle'

export class Exiting extends Component {
  static defaultProps = {
    threshold: false,
    eventThrottle: 200,
    render: () => null,
    onChange: isExiting => {}
  }

  state = {
    isExiting: false
  }

  eventListeners = new Map()

  componentDidMount() {
    this.addEvent(
      'mousemove',
      throttle(this.mouseDidMove, this.props.eventThrottle)
    )
  }

  componentWillUnmount() {
    this.removeEvents()
  }

  addEvent = (eventName, callback) => {
    document.addEventListener(eventName, callback, false)
    this.eventListeners.set(`document:${eventName}`, {eventName, callback})
  }

  removeEvent = key => {
    const {eventName, callback} = this.eventListeners.get(key)
    document.removeEventListener(eventName, callback)
    this.eventListeners.delete(key)
  }

  isExiting = position => {
    return position <= this.props.threshold
  }

  mouseDidMove = event => {
    const isExiting = this.isExiting(event.clientY)
    this.setState(() => ({isExiting}))
    this.props.onChange({isExiting})
  }

  removeEvents = () => {
    this.eventListeners.forEach((value, key, map) => this.removeEvent(key))
  }

  render() {
    const {isExiting} = this.state
    return this.props.render({isExiting})
  }
}
