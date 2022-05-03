import type { NextPage } from 'next'
import MainLayout from "../components/layouts/MainLayout/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout title={'main'} description={'main'}>
      <p>index</p>
    </MainLayout>
  )
}

export default Home
