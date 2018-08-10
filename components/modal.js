import React from 'react'
import Portal from './portal'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { opened: false }
  }

  handleToggleModal = () => {
    this.setState({ opened: !this.state.opened })
  }

  render () {
    return (
      <React.Fragment>
        <button type='button' onClick={this.handleToggleModal}>
          Open Modal
        </button>
        {this.state.opened && (
          <Portal selector='#modal'>
            <div className='overlay'>
              <div className='modal'>
                <p>
                  This modal is rendered using{' '}
                  <a href='https://reactjs.org/docs/portals.html'>portals</a>.
                </p>
                <button type='button' onClick={this.handleToggleModal}>
                  Close Modal
                </button>
              </div>
              <style jsx global>{`
                body {
                  overflow: hidden;
                }
              `}</style>
              <style jsx>{`
                .overlay {
                  position: fixed;
                  background-color: rgba(0, 0, 0, 0.7);
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                }
                .modal {
                  background-color: white;
                  position: absolute;
                  top: 10%;
                  right: 10%;
                  bottom: 10%;
                  left: 10%;
                  padding: 1em;
                }
              `}</style>
            </div>
          </Portal>
        )}
      </React.Fragment>
    )
  }
}
