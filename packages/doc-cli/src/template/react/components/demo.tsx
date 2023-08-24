import { type PropsWithChildren, useEffect } from 'react'

interface props {
  code: string
}

const Demo = (props: PropsWithChildren<props>) => {
  useEffect(() => {
    window.hljs.highlightAll()
  }, [])
  return <div className='doc-cli-demo-container'>
    <div className='doc-cli-demo-render'>
      {props.children}
    </div>
    <div className='doc-cli-demo-code'>
      <pre className='language-tsx'>
        <code>
          {props.code}
        </code>
      </pre>
    </div>
    </div>
}

export default Demo
