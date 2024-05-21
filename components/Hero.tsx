import Image from 'next/image'
import SubscribeForm from './SubscribeForm'
import LayoutEffect from './LayoutEffect'

const Hero = () => {
  return (
    <LayoutEffect
      isInviewState={{
        trueState: 'opacity-100 -translate-y-0',
        falseState: 'opacity-0 -translate-y-3',
      }}
    >
      <section className="py-28 overflow-hidden duration-300 ease-in bg-right bg-cover md:bg-[url('/bg.svg')]">
        <div className="custom-screen items-center justify-center gap-12 text-gray-800 md:flex xl:justify-between">
          <div className="flex-none space-y-5 max-w-2xl">
            <h1 className="text-4xl text-center font-extrabold sm:text-5xl xl:text-left">
              导出即刻动态为本地文件
            </h1>
            <section>
              <p className="leading-normal text-lg mb-4 text-center xl:text-left slide-in-bottom-subtitle">
                1. 导出自己和即友的动态列表，同时支持导出个人收藏
              </p>
              <p className="leading-normal text-lg mb-4 text-center xl:text-left slide-in-bottom-subtitle">
                2. 支持导出为 Markdown、纯文本、excel、csv 格式的文件
              </p>
              <p className="leading-normal text-lg mb-4 text-center xl:text-left slide-in-bottom-subtitle">
                3. 导出图片、动态链接、引用动态等完整信息
              </p>
              <p className="leading-normal text-lg mb-8 text-center xl:text-left slide-in-bottom-subtitle">
                4. 无缝导入 Obsidian、Heptabase 等笔记工具
              </p>
            </section>

            <p className="text-blue-400 font-bold text-center xl:text-left fade-in">
              立即体验:
            </p>

            <SubscribeForm />
          </div>
          <div className="hidden mt-12 md:mt-0 xl:block">
            <Image
              src="/desktop-app-prview.png"
              alt="即刻导出内容"
              width={800}
              height={600}
              className="w-full md:max-w-2xl"
            />
          </div>
        </div>
      </section>
    </LayoutEffect>
  )
}

export default Hero
