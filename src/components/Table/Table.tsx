import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { TABLE } from "../../common/constants";
import { IItems } from "../../common/types";
import style from "./Table.module.css";

export function TableOfItems({ items }: { items: IItems[] }) {
  return (
    <TableContainer
      overflowY={"auto"}
      height="fit-content"
      backgroundColor={"#FFFFFF"}
      marginTop="40px"
      maxHeight="48vh"
    >
      <Table variant="simple">
        <Thead backgroundColor="#FFFFFF" top="0.1px" position="sticky">
          <Tr>
            <Th className={style.th}>{TABLE.indexItem}</Th>
            <Th className={style.th}>{TABLE.id}</Th>
            <Th className={style.th}>{TABLE.articul}</Th>
            <Th className={style.th}>{TABLE.name}</Th>
            <Th className={style.th}>{TABLE.brand}</Th>
            <Th className={style.th}>{TABLE.price}</Th>
            <Th className={style.th}>{TABLE.quantity}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, index) => {
            return (
              <Tr key={item.id}>
                <Td className={style.th}>{index + 1}</Td>
                <Td className={style.th}>{item.id}</Td>
                <Td className={style.th}>{item.article}</Td>
                <Td className={style.th}>{item.name}</Td>
                <Td className={style.th}>{item.brand.name}</Td>
                <Td className={style.th}>{item.price}</Td>
                <Td className={style.th}>{item.quantity}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
