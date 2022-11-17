import React, {ReactElement} from 'react';
import {GetServerSidePropsContext} from "next";

import MainLayout from "../../../components/layouts/MainLayout/MainLayout";
import BreadCrumbs from "../../../components/Elements/BreadCrumbs/BreadCrumbs";
import PageHeader from "../../../components/Elements/PageHeader/PageHeader";
import {isMobile} from "../../../libs/uaParser";
import {NextPageProps} from "../../index";
import CategoryCards from "../../../components/UI/Cards/CategoryCards/CategoryCards";
import MobileMainFilter from "../../../components/UI/Filters/MobileMainFilter/MobileMainFilter";
import {NextPageWithLayout} from "../../_app";
import {Divider} from "../../../components/shared/Divider";
import {Section, SectionDirections} from "../../../components/shared/Section";
import {CatalogContent} from "../../../components/features/catalogPage/catalog/CatalogContent";

const CategoryElements: NextPageWithLayout<NextPageProps> = ({
  isMobile
}) => {

  return (
    <>
      {isMobile && <Divider invisible/>}

      <Section isMobile={isMobile} className='my-5 px-2'>
        <BreadCrumbs/>
        <PageHeader/>
      </Section>

      <Section isMobile={isMobile} className='mb-5'>
        <CategoryCards/>
      </Section>


      {isMobile && <MobileMainFilter/>}
      {isMobile && <Divider invisible className="my-1"/>}

      <Section isMobile={isMobile} className='items-start' direction={SectionDirections.Row}>
        <CatalogContent isMobile={isMobile}/>
      </Section>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

CategoryElements.getLayout = function getLayout (page: ReactElement) {
  return (
    <MainLayout title={'main'} description={'main'} isMobile={page.props.isMobile} showBackButton>{page}</MainLayout>
  )
}

export default CategoryElements;
