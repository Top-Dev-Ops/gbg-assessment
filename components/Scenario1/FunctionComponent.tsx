import { FC, ReactElement, useState, useEffect } from 'react'

export const Parent: FC = (): ReactElement => {
  const [ clickCount, setClickCount ] = useState(0)

  useEffect(() => {
    console.log('[Class comp] Bound to document scroll event')
    window.document.addEventListener('scroll', onPageScroll)

    return () => {
      console.log('[Class comp] Unbound from document scroll event')
      window.document.removeEventListener('scroll', onPageScroll)
    }
  }, [])

  const onPageScroll = (evt: Event) => {
    console.log(`[Class comp] Page scrolled! Resetting counter.`)
    setClickCount(0)
  }

  const onButtonClicked = (evt: Event) => {
    evt.stopPropagation()
    console.log(`[Class comp] Button clicked! Incrementing counter.`)
    setClickCount(clickCount + 1)
  }

  return (
    <div className="min-h-[200vh] relative">
      <div className="fixed inset-x-0 top-80 flex flex-col gap-6">
        <div>Click count: {clickCount}</div>
        <div>
          <Child
            onButtonClicked={onButtonClicked}
            label='Click me to increase the counter!'
          />
        </div>
        <div>Scroll the page to reset the counter</div>
      </div>
    </div>
  )
}

interface ChildProps {
  label: string
  onButtonClicked: (evt: any) => void
}

export const Child: FC<ChildProps> = ({ label, onButtonClicked }): ReactElement => {
  return (
    <button
      className="inline rounded-full bg-primary text-primary font-semibold px-5 py-2"
      onClick={(evt) => onButtonClicked(evt)}
    >
      {label}
    </button>
  )
}
