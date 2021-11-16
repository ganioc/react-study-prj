import { Link } from 'react-router-dom';

const Page404 = ({ location }) => (
    <>
      <h3>404 page</h3>
      <p style={{ background: '#ff0000', padding: '1rem', color: 'white' }} >Unknown url</p>
      <Link to="/">home</Link>
    </>
  )

  export default Page404;