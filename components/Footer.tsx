// const Footer = () => (
//   <footer>
//     <div className="custom-screen py-10 border-t mt-20 text-center text-gray-600 sm:mt-28">
//       <p>© From Mr.wujieli</p>
//     </div>
//   </footer>
// )

import Link from 'next/link'

const Footer = () => {
  const footerNavs = [
    {
      href: 'https://www.urltoany.com/',
      name: 'URL to Any',
    },
    {
      href: 'https://www.vercelpopular.com/',
      name: 'Vercel Popular',
    },
    {
      href: 'https://www.senkaai.com?ref=jike-export',
      name: 'Senka AI',
    },
  ]

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-10 py-10 border-t flex flex-col items-center justify-center">
          <p className="text-center">
            © 2024 Jike Export Extension. All rights reserved.
          </p>
          <p className="mt-0.5 flex items-center">
            <Link
              className="hover:text-gray-800 hover:underline duration-150"
              href="https://wujieli.com/"
              target="_blank"
            >
              Written by Mr.WujieLi
            </Link>
          </p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            More Product:{' '}
            {footerNavs.map((item, idx) => (
              <li className="hover:text-gray-800 hover:underline duration-150">
                <Link key={idx} href={item.href} target="_blank">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
