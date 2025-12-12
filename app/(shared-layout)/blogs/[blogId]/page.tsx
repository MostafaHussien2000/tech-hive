interface BlogPostPageProps {
  params: {
    blogId?: string;
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { blogId } = await params;

  return <div>Blog Post {blogId}</div>;
}
