'use client'

import { useRef, useState } from 'react'

interface IFaqsCardProps {
  faqsList: {
    q: string
    a: string[]
  }
  idx: number
}

const FaqsCard = (props: IFaqsCardProps) => {
  const answerElRef = useRef()
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const { faqsList, idx } = props

  const handleOpenAnswer = () => {
    // @ts-ignore
    const answerElH = answerElRef.current.childNodes[0].offsetHeight
    setState(!state)
    setAnswerH(`${answerElH + 40}px`)
  }

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        // @ts-ignore
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          {faqsList.a.map((item) => (
            <p className="text-gray-500">{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default () => {
  const faqsList = [
    {
      q: '可以导出即刻的哪些数据?',
      a: [
        '1. 自己的动态和收藏（需要进入自己的主页，进入动态或者收藏列表即可导出不同的内容）',
        '2. 其他即友的动态（需要进入即友的主页）',
      ],
    },
    {
      q: '如何下载离线安装并使用?',
      a: [
        '1. 首页下载离线安装包 ctx 文件',
        '2. 浏览器中输入 chrome://extensions/ ，进入扩展程序页面',
        '3. 扩展程序页面右上角开启开发者模式',
        '4. 将下载的 ctx 文件拖拽到扩展程序页面，完成安装',
      ],
    },
    {
      q: '激活码的购买页面为什么是英文，为什么使用美元定价?',
      a: [
        '1. 暂时还没有支付模块，第三方的支付平台 lemonsqueezy 能够快速接入',
        '2. lemonsqueezy 支持微信支付宝的支付方式，并且支付的时候使用的是人名币',
      ],
    },
  ]

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">常见问题</h1>
        {/* <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p> */}
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  )
}
