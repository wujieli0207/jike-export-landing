'use client'

import { useInView } from 'framer-motion'
import { FC, ReactElement, cloneElement, useRef } from 'react'

interface IProps {
  children: ReactElement // 确保 children 是 ReactElement 类型
  className?: string
  isInviewState?: {
    trueState?: string
    falseState?: string
  }
}

const LayoutEffect: FC<IProps> = ({
  children,
  className = '',
  isInviewState,
}) => {
  const { trueState = '', falseState = '' } = isInviewState ?? {}

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return cloneElement(children, {
    ref,
    className: `${children.props.className || ''} ${className || ''} ${
      isInView ? trueState : falseState
    }`,
  })
}

export default LayoutEffect
