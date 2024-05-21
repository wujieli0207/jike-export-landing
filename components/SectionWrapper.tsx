import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  className?: string
}

const SectionWrapper: FC<IProps> = ({ children, className, ...props }) => (
  <section {...props} className={`py-20 sm:py-28 ${className || ''}`}>
    {children}
  </section>
)

export default SectionWrapper
