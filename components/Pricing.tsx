import { GOOGLE_STORE_URL, LEMONSQUEEZY_PAY_URL } from '@/config/url'
import GradientWrapper from './GradientWrapper'
import Button from './ui/Button'
import Link from 'next/link'

const Pricing = () => {
  const plans = [
    {
      name: '支持者',
      desc: ['完整导出功能', '仅支持导出最近 50 条动态或收藏'],
      price: 0,
      priceDesc: '',
      isMostPop: false,
      url: GOOGLE_STORE_URL,
      btnText: '开始使用',
    },
    {
      name: '创始股东',
      desc: ['完整导出功能', '支持导出全部动态或收藏'],
      price: 1.99,
      priceDesc: '(约 15 块钱)',
      isMostPop: true,
      url: LEMONSQUEEZY_PAY_URL,
      btnText: '成为创始股东',
    },
  ]

  return (
    <GradientWrapper id="get-started" className="sm:my-16">
      <div className="custom-screen text-gray-600">
        <div className="relative max-w-2xl mx-auto flex flex-col justify-center">
          <h2 className="text-gray-800 text-3xl text-center font-semibold sm:text-4xl">
            购买一次，永久使用
          </h2>
          <p className="my-6 text-center">
            插件功能完整功能需付费激活，每个激活码支持 3 个设备
          </p>
        </div>
        <div className="space-y-6 justify-center gap-6 md:flex md:space-y-0">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl border shadow-lg ${
                item.isMostPop ? 'bg-gray-800 text-gray-300' : 'bg-white'
              }`}
            >
              <div className="h-full p-8 gap-y-4 min-w-full sm:min-w-[24rem] flex flex-col items-stretch">
                <span
                  className={`font-medium ${
                    item.isMostPop ? 'text-sky-400' : 'text-sky-500'
                  }`}
                >
                  {item.name}
                </span>
                <div
                  className={`text-3xl font-semibold ${
                    item.isMostPop ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  ${item.price}{' '}
                  <span className="text-xl font-normal">{item.priceDesc}</span>
                </div>
                {item.desc.map((e) => (
                  <p className="max-w-sm">{e}</p>
                ))}
                <div className="flex-1 flex items-end">
                  <Link
                    href={item.url}
                    passHref
                    target="_blank"
                    className="w-full"
                  >
                    <Button className="block w-full text-white bg-sky-500 hover:bg-sky-600 ring-offset-2 ring-sky-500 focus:ring shadow">
                      {item.btnText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientWrapper>
  )
}

export default Pricing
