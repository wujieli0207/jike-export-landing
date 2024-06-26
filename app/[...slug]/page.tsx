import { notFound } from 'next/navigation'
import { allPages } from 'contentlayer/generated'
import MdxContainer from '@/components/container/MdxContainer'
import { Metadata } from 'next'
import { siteName } from '@/config/site'
import NavLink from '@/components/ui/NavLink'

interface IProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: IProps['params']) {
  const slug = params?.slug?.join('/')
  const page = allPages.find((post) => post.slugAsParams === slug)

  if (!page) return null

  return page
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) return {}

  return {
    title: `${siteName} - ${page.title}`,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<IProps['params'][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }: IProps) {
  const page = await getPageFromParams(params)

  if (!page) notFound()

  return (
    <div className="w-full flex justify-center">
      <article className="py-6 px-5 max-w-xl prose">
        <div className="flex justify-between -mb-2">
          <h1>{page.title}</h1>

          <NavLink
            href="/"
            className="font-medium text-sm text-black hover:text-gray-500"
          >
            回到首页
          </NavLink>
        </div>
        {page.description && <p className="text-xl">{page.description}</p>}
        <hr />

        <MdxContainer code={page.body.code} />
      </article>
    </div>
  )
}
