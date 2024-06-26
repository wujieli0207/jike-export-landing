import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import MdxContainer from '@/components/container/MdxContainer'
import { Metadata } from 'next'
import { siteName } from '@/config/site'

interface IProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: IProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) return null

  return post
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) return {}

  return {
    title: `${siteName} - ${post.title}`,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<IProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }: IProps) {
  const post = await getPostFromParams(params)

  if (!post) notFound()

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-7" />

      <MdxContainer code={post.body.code} />
    </article>
  )
}
