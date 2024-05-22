import { FC } from 'react'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  Image,
}

interface IProps {
  code: string
}

const MdxContainer: FC<IProps> = ({ code }) => {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

export default MdxContainer
