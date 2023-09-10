import { useRouter } from "next/router";

// domain.com/news/newsId

export default function DetailPage() {
  const router = useRouter();
  console.log(router);

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}
