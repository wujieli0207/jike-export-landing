import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  className?: string
}

const Button: FC<IProps> = ({ children, className, ...props }) => (
  <>
    <button
      role="button"
      {...props}
      className={`${
        className || ''
      } px-4 py-2.5 font-medium text-sm text-center duration-150 rounded-lg`}
    >
      {children}
    </button>
  </>
)
export default Button
