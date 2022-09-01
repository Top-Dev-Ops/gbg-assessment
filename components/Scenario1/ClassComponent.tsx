import React from 'react'

interface Props {}
interface State {
  clickCount: number
}

export class Parent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      clickCount: 0,
    }

    this.onButtonClicked = this.onButtonClicked.bind(this)
    this.onPageScroll = this.onPageScroll.bind(this)
  }

  componentDidMount() {
    console.log('[Class comp] Bound to document scroll event')
    window.document.addEventListener('scroll', this.onPageScroll)
  }

  componentWillUnmount() {
    console.log('[Class comp] Unbound from document scroll event')
    window.document.removeEventListener('scroll', this.onPageScroll)
  }

  onButtonClicked(evt: Event) {
    evt.stopPropagation()
    console.log(`[Class comp] Button clicked! Incrementing counter.`)
    this.setState({ clickCount: this.state.clickCount + 1 })
  }

  onPageScroll(evt: Event) {
    console.log(`[Class comp] Page scrolled! Resetting counter.`)
    this.setState({ clickCount: 0 })
  }

  render() {
    return (
      <div className="min-h-[200vh] relative">
        <div className="fixed inset-x-0 top-8 flex flex-col gap-6">
          <div>Click count: {this.state.clickCount}</div>
          <div>
            <Child
              onButtonClicked={this.onButtonClicked}
              label='Click me to increase the counter!'
            />
          </div>
          <div>Scroll the page to reset the counter</div>
        </div>
      </div>
    )
  }
}

interface ChildProps {
  label: string
  onButtonClicked: (evt: any) => void
}
export class Child extends React.Component<ChildProps> {
  constructor(props: ChildProps) {
    super(props)
  }

  render() {
    return (
      <button
        className="inline rounded-full bg-primary text-primary font-semibold px-5 py-2"
        onClick={(evt) => this.props.onButtonClicked(evt)}
      >
        {this.props.label}
      </button>
    )
  }
}