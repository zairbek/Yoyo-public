import React from 'react';

import MyPageLayout from "../../../../../components/layouts/MyPageLayout/MyPageLayout";
import EditStore from "../../../../../components/Pages/My/Stores/Store/EditStore";

const Store = () => {
  return (
    <MyPageLayout title={'edit store'} description={'edit store'}>
      <EditStore/>
    </MyPageLayout>
  );
};

export default Store;
