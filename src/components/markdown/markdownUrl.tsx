import React from 'react'
import Markdown from './markdown'
import Axios from 'axios'
import hljs from 'highlight.js'

const options = {
  html: true,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  highlight: (str: string, lang: string) => {
    if (lang && hljs.getLanguage(lang)) {
				const value =hljs.highlight(lang, str, true).value 
				console.log(value);
        return value
		}else {
			return str
		}
  },
}

export default class MdFromUrl extends React.Component<
  { url: string },
  { text: string }
> {
  constructor(props: { url: string }) {
    super(props)
    this.state = {
      text: '',
    }
  }

	componentDidMount(){
    Axios.get(this.props.url).then(data => {
      this.setState({ text: data.data })
    })
	}

  render() {
    return <Markdown options={options}>{this.state.text}</Markdown>
  }
}
