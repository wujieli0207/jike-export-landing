import Link from 'next/link'
import Brand from './ui/Brand'
import NavLink from './ui/NavLink'

const Navbar = () => (
  <header>
    <nav className="custom-screen px-5 py-3 flex items-center justify-between md:py-5">
      <div>
        <Link href="/">
          <Brand />
        </Link>
      </div>

      <div>
        <NavLink
          href="/payment"
          className="font-medium text-sm text-black  hover:bg-gray-100"
        >
          支付指南
        </NavLink>
      </div>
    </nav>
  </header>
)

export default Navbar
