import Header from '../components/header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const DefaultLayout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default DefaultLayout;
