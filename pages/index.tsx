import type {NextPage} from 'next'

import MainLayout from "../components/layouts/MainLayout/MainLayout";

export interface NextPageProps {
  isMobile: boolean;
}

const Home: NextPage<NextPageProps> = ({isMobile}) => {
  return (
    <MainLayout title={'main'} description={'main'} isMobile={isMobile}>


    </MainLayout>
  )
}

export default Home
