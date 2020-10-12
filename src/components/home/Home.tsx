import * as React from 'react'
import axios from 'axios'
import ArticleCard from '../articleCard/articleCard'
import { Props as ArticleCardProps } from '../articleCard/articleCard'
import './home.css'

export default class Home extends React.Component<
  {},
  { articles: ArticleCardProps[] }
> {
	constructor(){
		super({},{articles:[]})
	}

  componentDidMount() {
    axios.get('/json/articleCards.json').then(data => {
      console.log(data.data)
      this.setState({ articles: data.data as ArticleCardProps[] })
      console.log(this.state)
    })
  }

  render() {
    let articles

    if (this.state != undefined) {
      articles = this.state.articles?.map(articleCard => (
        <ArticleCard {...articleCard} key={articleCard.title} />
      ))
    }

    return <div className="home">{articles}</div>
  }
}
