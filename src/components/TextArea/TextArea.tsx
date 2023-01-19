import {
  Alert,
  AlertDescription,
  AlertIcon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { SERVICE } from "../../common/constants";
import style from "./Text.module.css";

export function TextArea({
  value,
  setValue,
  error,
}: {
  value: string;
  setValue: (arg0: string) => void;
  error: string;
}) {
  let handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Text className={style.text} mb="1px">
        {SERVICE.items}
      </Text>
      {error && (
        <Alert borderRadius={5} status="error">
          <AlertIcon />
          <AlertDescription
            lineHeight={"18,76px"}
            fontFamily={"Montserrat"}
            fontWeight={400}
            fontSize={14}
          >
            {error}
          </AlertDescription>
        </Alert>
      )}
      <Textarea
        className={style.textArea}
        value={value}
        onChange={handleInputChange}
        placeholder={SERVICE.placeHolder}
        size="xs"
        resize="none"
        backgroundColor="#FFFFFF"
      />
    </>
  );
}
