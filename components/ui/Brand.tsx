import Image from 'next/image'

const Brand = () => (
  <div className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl ">
    <Image src="/logo.png" alt="logo" width="30" height="30" />
    <span className="ml-2">即刻导出</span>
  </div>
)

export default Brand
