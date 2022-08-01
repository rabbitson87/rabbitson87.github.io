import React from "react";
import Content from "@theme-original/BlogPostItem/Content";
import { ReactCusdis } from "react-cusdis";

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <div className="mt-2">
        <ReactCusdis
          attrs={{
            host: "https://blog-comment-orcin.vercel.app",
            appId: "50d715e5-f844-4ba3-a9cc-a73cdf88be98",
            pageId: props.children.type.frontMatter.slug,
            pageTitle: props.children.type.frontMatter.title,
            pageUrl: `https://rabbitson87.github.io${props.children.type.frontMatter.permalink}`,
            theme: "auto",
          }}
        />
      </div>
    </>
  );
}
