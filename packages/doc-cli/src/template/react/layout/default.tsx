import type { PropsWithChildren } from 'react'

const DefaultLayout = (props: PropsWithChildren) => {
  return <div className="doc-layout-default">
  <div className="doc-layout-header">
    header
  </div>
  <div className="doc-layout-wrapper">
    <div className="doc-layout-sidebar">
      sidebar
    </div>
    <div className="doc-layout-content">
      {props.children}
    </div>
  </div>
</div>
}

export default DefaultLayout
