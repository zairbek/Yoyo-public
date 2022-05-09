import {GetServerSidePropsContext, NextPage} from "next";

import MainSettings from "../../../components/blocks/My/Settings/MainSettings";
import ProfileSettings from "../../../components/blocks/My/Settings/ProfileSettings";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import {isMobile} from "../../../libs/uaParser";
import {NextPageProps} from "../../index";

const Settings: NextPage<NextPageProps> = ({isMobile}) => {
  const title = 'Настройки профилья';
  return (
    <MyPageLayout title={title} description={'setting'} isMobile={isMobile}>
      {/* Profile */}
      <MainSettings/>

      {/* Profile */}
      <ProfileSettings/>
    </MyPageLayout>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default Settings
