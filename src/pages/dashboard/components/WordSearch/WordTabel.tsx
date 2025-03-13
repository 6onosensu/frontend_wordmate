import { FC, useState } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableRow, Typography, 
} from "@mui/material";
import addIcon from "@/assets/add.svg";
import SvgButton from "@/components/common/SvgButton";
import { DictionaryAPIResponse } from "@/types/wordType";
import DefinitionDetails from "./DefinitionDetails";

interface WordTableProps {
  meanings: DictionaryAPIResponse["meanings"];
  onAddDefinition?: (
    meaning: DictionaryAPIResponse["meanings"][number],
    definition: DictionaryAPIResponse["meanings"][number]["definitions"][number]
  ) => void;
}

const WordTable: FC<WordTableProps> = ({ meanings, onAddDefinition }) => {
  const [selectedDefinition, setSelectedDefinition] = useState<{ 
    meaning: any, 
    definition: any 
  } | null>(null);

  const handleRowClick = (meaning: any, definition: any) => {
    setSelectedDefinition((previousSelectedDefinition) => {
      if (
        previousSelectedDefinition &&
        previousSelectedDefinition.definition === definition
      ) {
        return null;
      } else {
        return {
          meaning: meaning,
          definition: definition,
        };
      }
    });
  };

  return (
    <TableContainer sx={{ mt: 3 }}>
      <Table>
        <TableBody>
          {meanings.map((meaning, index) => (
            meaning.definitions.map((def, i) => (
              <TableRow 
                key={`${index}-${i}`}
                hover
              >
                <TableCell
                  sx={{ cursor: "pointer", width: "140vh", }} 
                  onClick={() => handleRowClick(meaning, def)}
                >
                  {selectedDefinition?.definition === def ? (
                    <DefinitionDetails meaning={meaning} definition={def} />
                  ) : (
                    <Typography>{def.definition}</Typography>
                  )}
                </TableCell>
                <TableCell>
                  <SvgButton
                    iconSrc={addIcon}
                    altText="Add to List"
                    onClick={() => onAddDefinition?.(meaning, def)}
                  />
                </TableCell>
              </TableRow>
            ))
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WordTable;
