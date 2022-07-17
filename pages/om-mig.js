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
            headingSpanOne
            headingSpanTwo
            headingSpanThree
            heroText
            image {
              id
              url
            }
          }
        }
      }
    `

    const { homepage } = await graphcms.request(query)
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

export default function about ({ homepage }) {
  console.log(homepage)
  return (
    <>
      <Head>
        <title>Scott Lind | Om mig</title>
      </Head>
      <Hero hero={homepage.hero} />
    </>
  )
}

