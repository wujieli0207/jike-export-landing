import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  href: string
  className?: string
}

const NavLink: FC<IProps> = ({ children, href, className, ...props }) => (
  <Link
    href={href}
    {...props}
    className={`py-2.5 px-4 text-center rounded-lg duration-150 ${
      className || ''
    }`}
  >
    {children}
  </Link>
)

export default NavLink
