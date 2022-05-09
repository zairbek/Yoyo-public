import React from 'react';
import Checkbox from "../../Forms/Checkbox/Checkbox";
import RadioButton from "../../Forms/RadioButton/RadioButton";

const MainFilter = () => {
  return (
      <form
        action=""
        className="pt-4"
      >
        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-100">
            Type
          </legend>

          <div className="px-4 py-3">
            <Checkbox label="Игрушки" name="toy"/>
            <Checkbox label="Game" name="game"/>
            <Checkbox label="Outdoor" name="outdoor"/>

            <div className="pt-2">
              <button
                type="button"
                className="text-xs text-gray-500 underline"
              >
                Reset Type
              </button>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            Age
          </legend>

          <div className="px-4 py-3">

            <Checkbox label="3+" name="age[3+]" checked={true}/>
            <Checkbox label="8+" name="age[8+]"/>
            <Checkbox label="12+" name="age[12+]"/>
            <Checkbox label="16+" name="age[16+]"/>

            <div className="pt-2">
              <button
                type="button"
                className="text-xs text-gray-500 underline"
              >
                Reset Age
              </button>
            </div>
          </div>
        </fieldset>


        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            <div className="form-control">
              <label className="cursor-pointer label justify-start gap-x-2">
                <input type="checkbox" className="toggle toggle-xs toggle-primary"/>
                <span className="label-text">Remember me</span>
              </label>
            </div>
          </legend>
        </fieldset>


        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            Range
          </legend>
        </fieldset>

        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            Study Type
          </legend>

          <div className="px-4 py-3">
              <RadioButton label="Undergraduate" name="radio"/>
              <RadioButton label="Postgraduate" name="radio"/>
          </div>
        </fieldset>

        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            Price
          </legend>

          <div className="px-4 py-3">


            <div className="flex flex-row items-center gap-x-2">
              <div>
                <input
                  className="input input-sm input-bordered w-full max-w-xs"
                  placeholder="от"
                  type="text"
                />
              </div>
              <div>
                <input
                  className="input input-sm input-bordered w-full max-w-xs"
                  placeholder="до"
                  type="text"
                />
              </div>
            </div>
          </div>
        </fieldset>




        <div className="flex justify-between px-4 py-3 border-t border-gray-200">
          <button
            name="reset"
            type="button"
            className="btn btn-secondary btn-outline btn-sm  font-medium normal-case"
          >
            Reset All
          </button>

          <button
            name="commit"
            type="button"
            className="btn btn-primary btn-sm font-medium normal-case"
          >
            Apply Filters
          </button>
        </div>
      </form>
  );
};

export default MainFilter;
