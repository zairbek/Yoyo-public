import React, {useState} from 'react';
import classNames from "classnames";

const firstPage = () => (
  <>
    <div className="card-title">Выберите вашу страну</div>

    <div className="mx-auto my-4">

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Кыргызстан</span>
          <input type="radio" name="radio-6" className="radio radio-primary" defaultChecked/>
        </label>
      </div>

    </div>
  </>
)

const secondPage = () => (
  <>
    <div className="card-title text-center">Завершите регистрацию</div>

    <div className="mx-auto my-4 w-96">



      <div className="form-control">
        <label className="label">
          <span className="label-text">Продажи</span>
          <span className="label-text-alt text-red-500">&#10059;</span>
        </label>

        <label className="label cursor-pointer">
          <input type="radio" name="radio-6" className="radio radio-primary" defaultChecked/>
          <span className="label-text">Из Кыргызстана</span>
        </label>
      </div>


      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Категория вашего магазина</span>
          <span className="label-text-alt text-red-500">&#10059;</span>
        </label>
        <select className="select select-bordered" defaultValue={''}>
          <option disabled value={''}>Выберите категорию</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
        <label className="label">
          <span className="label-text-alt"/>
          <span className="label-text-alt text-red-500">Alt label</span>
        </label>
      </div>


      <div className="form-control">
        <label className="label">
          <span className="label-text">Названия магазина</span>
          <span className="label-text-alt text-red-500">&#10059;</span>
        </label>
        <input type="text" placeholder="Названия магазина" className="input input-bordered w-full"/>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Названия магазина</span>
          <span className="label-text-alt text-red-500">&#10059;</span>
        </label>
        <input type="text" placeholder="Названия магазина" className="input input-bordered input-error w-full"/>
        <label className="label">
          <span className="label-text-alt"/>
          <span className="label-text-alt text-red-500">Alt label</span>
        </label>
      </div>

    </div>
  </>
)


const tabs = [
  {
    name: 'Страна',
    page: firstPage
  }, {
    name: 'Магазин',
    page: secondPage
  }
]

const CreateStoreTab = () => {
  const [currentTab, setCurrentTab] = useState(0)



  return (
    <div className="flex flex-col">

      <ul className="steps">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={classNames('step', currentTab >= index ? 'step-primary': null)}
            onClick={() => setCurrentTab(index)}
          >
            {tab.name}
          </li>
        ))}
      </ul>


      <div className="py-4">
        {tabs[currentTab].page()}
      </div>

      <div className="flex justify-between">
        <div>
        {currentTab === 0
          ? null
          : <button className="btn btn-sm normal-case" onClick={() => setCurrentTab(currentTab - 1)}>Назад</button>
        }
        </div>

        <div>
          <button className="btn btn-sm btn-primary normal-case" onClick={() => setCurrentTab(currentTab + 1)}>Следующий</button>
        </div>

      </div>
    </div>
  );
};

export default CreateStoreTab;
