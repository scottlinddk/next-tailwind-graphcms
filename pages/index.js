import Link from 'next/link';
import Head from 'next/head'
import { GraphQLClient } from 'graphql-request';
import Hero from '../components/Hero';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL_ENDPOINT)
export async function getStaticProps() {
  try {
    const query = `
      query {
        homepage(where: {page_id: 1}) {
          id
          hero {
            heading
            image {
              id
              url
            }
          }
        }
      }
    `

    const { homepage } = await graphcms.request(query)
    console.log(homepage)
    return {
      props: {
        homepage,
      },
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {},
  }
}

export default function index ({ homepage }) {
  return (
    <>
      <Head>
        <title>Scott Lind | Home</title>
        <meta name="keywords" content="Scott Lind | Frontendudvikler - Aalborg"/>
      </Head>
      <Hero hero={homepage.hero} />
    </>
  )
}

