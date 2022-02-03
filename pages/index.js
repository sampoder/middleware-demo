import routes from "../routes";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Available Routes</title>
      </Head>
      <h1>Available Routes</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.slug}>
            <a href={route.destination}>
              /{route.slug}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
