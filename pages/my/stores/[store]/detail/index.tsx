import {GetServerSidePropsContext, NextPage} from "next";
import React, {useState} from 'react';

import MyPageLayout from "../../../../../components/layouts/MyPageLayout/MyPageLayout";
import ChangePasswordPopup from "../../../../../components/Elements/Popups/ChangePasswordPopup/ChangePasswordPopup";
import {NextPageProps} from "../../../../index";
import {isMobile} from "../../../../../libs/uaParser";

const Store: NextPage<NextPageProps> = ({isMobile}) => {
  const [isEditable, setEditable] = useState(false);

  return (
    <MyPageLayout title={'edit store'} description={'edit store'} isMobile={isMobile}>

      <div className="mb-5">
        <div className="flex justify-between">
          <h2 className="text-xl">Основное</h2>
          {isEditable
            ?
            <div className="flex gap-2">
              <button className="btn btn-outline btn-sm gap-2 normal-case" onClick={() => setEditable(false)}>
                Отменить
              </button>
              <button className="btn btn-primary btn-sm gap-2 normal-case">
                Сохранить
              </button>
            </div>
            :
            <div>
              <button className="btn btn-outline btn-sm gap-2 normal-case" onClick={() => setEditable(true)}>
                Редактировать
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
              </button>
            </div>
          }
        </div>

        <div className="divider my-0"/>

        <div className="flex items-center my-2 h-8">
          <p className="basis-1/4">Названия</p>
          <div className="basis-3/4 text-muted">
            {isEditable
              ? <input type="text" className="input input-sm input-bordered w-full" placeholder="Названия" defaultValue="Крассовки"/>
              : <p>Крассовки</p>
            }
          </div>
        </div>

        <div className="flex items-center my-2 h-8">
          <p className="basis-1/4">Пароль</p>

          <div className="basis-3/4 text-muted">
            {isEditable
              ? <ChangePasswordPopup/>
              : <p className="basis-3/4 text-muted">........</p>
            }
          </div>
        </div>
      </div>

    </MyPageLayout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {isMobile: isMobile(ctx.req)}
  }
}

export default Store;
