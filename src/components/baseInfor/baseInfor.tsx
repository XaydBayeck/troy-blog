import * as React from 'react'
import './baseInfor.css'

/* TODO: add link with them  <03-10-20, David Chen> */
export interface Props {
  articleNum: number
  categoryNum: number
  tagNum: number
}

export default function BaseInfor(props: Props) {
  return (
    <div className="baseInfor">
      <div className="infor-cell article">
        <div className="number">{props.articleNum}</div>
        <div className="name">Article</div>
      </div>
      <span className="separate" />
      <div className="infor-cell category">
        <div className="number">{props.categoryNum}</div>
        <div className="name">Category</div>
      </div>
      <span className="separate" />
      <div className="infor-cell tag">
        <div className="number">{props.tagNum}</div>
        <div className="name">Tag</div>
      </div>
    </div>
  )
}
