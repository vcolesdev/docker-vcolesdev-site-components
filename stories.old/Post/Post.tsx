import { ForwardedRef, forwardRef } from "react";

interface PostApi {
  content: string | any;
}

const Post = forwardRef(function Post({ content, ...props }: PostApi, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <article ref={ref} {...props}>
      {content}
    </article>
  );
});

export { Post, PostApi };
