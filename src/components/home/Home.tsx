import * as React from 'react'
import ArticleCard from '../articleCard/articleCard'
import './home.css'

export default class Home extends React.Component {
  testArticle = {
    title: '测试文章',
    datetime: '2020-10-03',
    category: 'test',
    tags: ['test', 'tagTest', 'typescript', 'blog'],
    part:
      '这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章。\n这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章。\n这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章，这是用来测试的文章。\n',
  }

  render() {
    return (
      <div className="home">
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
        <ArticleCard {...this.testArticle} />
      </div>
    )
  }
}
