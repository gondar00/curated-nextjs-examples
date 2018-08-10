import DefaultLayout from '../layouts/default-layout.js'
import Modal from '../components/modal';
// import WithSentry from '../lib/with-sentry'

export default class extends React.PureComponent {
  // componentDidMount() {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/service-worker.js')
  //       .then(registration => {
  //         console.log('service worker registration successful')
  //       })
  //       .catch(err => {
  //         console.warn('service worker registration failed', err.message)
  //       })
  //   }
  // }

  render() {
    return (
      <DefaultLayout>
        <p>Hello Next.js</p>
        <Modal />
      </DefaultLayout>
    )
  }
}
