import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/form2">Form2</Link></li>
      </ul>
    </nav>
  )
}
export default Nav
