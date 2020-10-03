import * as React from 'react'
import './linksheet.css'

export interface Props {
  links: {
    linkName: string
    linkHref: string
  }[]
}

export default function LinkSheet({ links }: Props) {
  let linksJSX = links.map(link => {
    return (
      <a href={link.linkHref}  className="link" target="_blank">
        <span className="dot" />
				<div className="linka">{link.linkName}</div>
      </a>
    )
  })

  return <div className="linksheet">{linksJSX}</div>
}
