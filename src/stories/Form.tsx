import React from "react";
import { InputField } from "./InputField";
import "./form.css";
import { Button } from "./Button";
export interface FormProps {
  addressInfo: null | {
    name: string;
    addres: string;
    zip: string;
    city: string;
  };
}

const testAddress = {
  name: "Jane Doe",
  addres: "3 Newbridge Court",
  zip: "CA 91709",
  city: "Chino Hills",
};

export const Form: React.FC<FormProps> = ({ addressInfo}) => {
  return (
    <div className={["storybook-form"].join(" ")}>
      <h1 className={"storybook-form-title"}>Delivery address:</h1>
      {addressInfo ? (
        <div className={"storybook-form-addresInfo"}>
          <div className={"storybook-form-addresInfo-head"}>
            <div
              className={[
                "storybook-form-addresText",
                "storybook-form-addresText-name",
              ].join(" ")}
            >
              {addressInfo.name}
            </div>
            <a href="#" className="storybook-form-addres-edit">
              Edit
            </a>
          </div>
          <div
            className={["storybook-form-addresText"].join(" ")}
            style={{ width: "70%" }}
          >
            {addressInfo.addres} {addressInfo.city}, {addressInfo.zip}
          </div>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Receipient Name"
            className={"storybook-form-input"}
          />
          <input
            type="text"
            placeholder="Address"
            className={"storybook-form-input"}
          />
          <div className={"storybook-form-address"}>
            <input
              type="text"
              placeholder="Zip"
              className={[
                "storybook-form-input",
                "storybook-form-input-address",
              ].join(" ")}
            />
            <input
              type="text"
              placeholder="City"
              className={[
                "storybook-form-input",
                "storybook-form-input-address",
              ].join(" ")}
            />
          </div>
          <input
            type="text"
            placeholder="Location Details ( apartment / house number )"
            className={"storybook-form-input"}
          />
          <div>
            <input
              type="phone"
              placeholder="20 8662 613"
              className={"storybook-form-input"}
            />
          </div>
          <Button
            label="Next"
            backgroundColor="#3FDC9D"
            customStyle="storybook-form-btn"
          />
        </>
      )}
    </div>
  );
};
