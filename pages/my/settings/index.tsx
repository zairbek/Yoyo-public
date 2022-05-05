import {NextPage} from "next";

import MainSettings from "../../../components/blocks/My/Settings/MainSettings";
import ProfileSettings from "../../../components/blocks/My/Settings/ProfileSettings";
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";

const Settings: NextPage = () => {
  return (
    <MyPageLayout title={'setting'} description={'setting'}>
      {/* Profile */}
      <MainSettings/>

      {/* Profile */}
      <ProfileSettings/>
    </MyPageLayout>
  );
}

export default Settings
