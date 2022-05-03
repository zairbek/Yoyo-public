import React from 'react';

const options = [
  {
    id: 1,
    name: 'По умолчанию',
    value: "default"
  },
  {
    id: 2,
    name: 'По дате',
    value: "date"
  },
  {
    id: 3,
    name: "Дешевле",
    value: "cheap"
  },
  {
    id: 4,
    name: 'Дороже',
    value: "expensive"
  },
];

const SortingPanel = () => {
  return (
    <div className="p-2">
      <div className="flex">
        {/*Sort*/}
        <div>
          <div className="form-control flex-row gap-x-2">
            <label className="label">
              <span className="label-text">Сортировка</span>
            </label>
            <select className="select select-sm select-bordered">
              {options.map(option =>
                <option key={option.id} value={option.value}>{option.name}</option>
              )}
            </select>
          </div>
        </div>

        {/*view*/}
        {/*<div>*/}
        {/* будем view */}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default SortingPanel;
