import React, { Component } from 'react'
import Helmet from 'react-helmet'
import DefaultLayout from '../layouts/default-layout.js'
// import 'semantic-ui-css/components/modal.css'
// import 'semantic-ui-css/components/header.css'
// import 'semantic-ui-css/components/button.css'
// import 'semantic-ui-css/components/list.css'
// import 'semantic-ui-css/components/icon.css'
// import 'semantic-ui-css/themes/default/assets/fonts/icons.eot'
// import 'semantic-ui-css/themes/default/assets/fonts/icons.woff'
// import 'semantic-ui-css/themes/default/assets/fonts/icons.woff2'
// import { Modal, Header, Button, List, Icon } from 'semantic-ui-react'

export default class About extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      Helmet.renderStatic()
    }
    return { title: 'About' }
  }

  render() {
    const { title } = this.props

    return (
      <DefaultLayout>
        <div>
          <Helmet
            title={`${title} | Hello next.js!`}
            meta={[{ property: 'og:title', content: title }]}
          />
          About the World
        </div>
        {/* <List vertical relaxed>
      <List.Item>
        <List.Content>
          <List.Header as='a'>Next.js</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as='a'>React</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as='a'>Vue.js</List.Header>
        </List.Content>
      </List.Item>
    </List> */}
      </DefaultLayout>
    )
  }
}
