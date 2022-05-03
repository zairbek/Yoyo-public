
import MyPageLayout from "../../../components/layouts/MyPageLayout/MyPageLayout";
import {NextPage} from "next";

const CreateStore: NextPage = () => {
  return (

    <MyPageLayout title={'create STore'} description={'create STore'}>

      {/* Создание магазина */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl">Создание магазина</h2>
        </div>

        <div className="divider my-0"/>

        <div className="w-[40rem] mx-auto">


          <div className="flex gap-4">
            <div className="form-control flex-auto">
              <label className="label">
                <span className="label-text">Названия</span>
                <span className="label-text-alt">*</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full"/>
              <label className="label">
                <span className="label-text-alt"/>
                <span className="label-text-alt">Alt label</span>
              </label>
            </div>

            <div className="form-control flex-auto">
              <label className="label">
                <span className="label-text">ID магазина</span>
              </label>
              <label className="input-group">
                <span>@</span>
                <input type="text" placeholder="" className="input input-sm input-bordered w-full"/>
              </label>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Толук аталышы</span>
              <span className="label-text-alt">*</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full"/>
            <label className="label">
              <span className="label-text-alt"/>
              <span className="label-text-alt">Alt label</span>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Описание</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
          </div>



          <div className="flex justify-between pt-2">
            <h3 className="text-lg">Адреса</h3>
          </div>
          <div className="divider my-0"/>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Адрес магазина</span>
              <span className="label-text-alt">*</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full"/>
            <label className="label">
              <span className="label-text-alt"/>
              <span className="label-text-alt">Alt label</span>
            </label>
          </div>


          <div className="flex justify-between pt-2">
            <h3 className="text-lg">Куда хотите продать?</h3>
          </div>

          <div className="flex gap-4">
            <div className="form-control flex-auto">
              <label className="label">
                <span className="label-text">Страна</span>
                <span className="label-text-alt">*</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full"/>
              <label className="label">
                <span className="label-text-alt"/>
                <span className="label-text-alt">Alt label</span>
              </label>
            </div>

            <div className="form-control flex-auto">
              <label className="label">
                <span className="label-text">Область</span>
              </label>
              <input type="text" placeholder="" className="input input-sm input-bordered w-full"/>
            </div>
          </div>

        </div>

      </div>
    </MyPageLayout>
  )
}

export default CreateStore;
