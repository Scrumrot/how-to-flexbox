import { Helmet } from "react-helmet-async";
export interface HeadProps {
  title?: string;
  description?: string;
}

export default function Head({
  title = "How to Flexbox",
  description = ""
}: HeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}
