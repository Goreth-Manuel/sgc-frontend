import React from "react";
import Select from "react-dropdown-select";
import { DropdownTag } from "./style";

function Dropdown() {
  const options = [
    {
      value: 1,
      label: "Leanne Graham",
      input: "name",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];

  return (
    <DropdownTag id="select">
      <Select
        options={options}
        onChange={(values) => this.setValues(values)}
        placeholder="Select an option"
      />
    </DropdownTag>
  );
}

export default Dropdown;
