import * as React from 'react'
import { Link } from 'react-router-dom'
import './articleCard.css'

export interface Props {
  title: string
  datetime: string
  category: string
  tags: string[]
  part: string
}

export default function ArticleCard({
  title,
  datetime,
  category,
  tags,
  part,
}: Props) {
  return (
    <div className="articleCard">
      <div className="article-title">{title}</div>
      <div className="article-infor">
        <div className="first-infor">
          <div className="article-datetime">
            <i className="article-icon fa fa-clock" /> {datetime}
          </div>
          <span />
          <div className="article-category">
            <i className="article-icon fa fa-cube" />
            <a href={'#/category/' + category} className="article-block">
              <span className="block">{category}</span>
            </a>
          </div>
        </div>
        <div className="article-tags">
          <i className="article-icon fa fa-tag" />
          <div className="tagList">
            {tags.map(tag => {
              return (
                <a href={'#/tag/' + tag} className="article-block">
                  <span className="block">{tag}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="article-part">{part}</div>
      <Link to={'/markdown/' + title} className="readMore">
        Read More <span>>></span>
      </Link>
      <span className="separat" />
    </div>
  )
}
