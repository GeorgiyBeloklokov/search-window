import { Textarea, Text } from "@chakra-ui/react";
import { useState } from "react";
import { SERVICE } from "../../common/constants";

export function TextArea () {
  let [value, setValue] = useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Text mb="1px">{SERVICE.items}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder={SERVICE.placeHolder}
        size="xs"
      />
    </>
  );
}
