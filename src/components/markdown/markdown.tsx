import * as React from 'react'
import Md from 'markdown-it'
import stripIndent from 'strip-indent'

interface Props {
  options?: Md.Options
  source?: string
}

export default class Markdown extends React.Component<Props, { md: Md }> {

  componentWillUpdate(nextProps: Props) {
    if (nextProps.options != this.props.options) {
      this.setState({ md: new Md('default', nextProps.options) })
    }
  }

  renderMarkdown = (source: string) => {
    if (!this.state.md) {
      this.setState({ md: new Md('default', this.props.options) })
    }
    return this.state.md.render(stripIndent(source))
  }

  content = () => {
    if (this.props.source) {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: this.renderMarkdown(this.props.source),
          }}
        />
      )
    } else {
      return React.Children.map(this.props.children, child => {
        if (child != undefined) {
          return (
            <span
              dangerouslySetInnerHTML={{
                __html: this.renderMarkdown(child?.toString()),
              }}
            />
          )
        }
      })
    }
  }

  render() {
    return <div className="markdown">{this.content()}</div>
  }
}
