import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Sneaker } from "../../organisms/ItemCard/ItemCard";
import ProductService from "../../services/ProductService";
import "./SearchBar.css";

/**
 * Type for SearchBar
 */
export type SearchBarProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFilteredRows: (filter: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[];
  filterAfter: string[];
};

/**
 * Search Bar with live Filtering
 * requestSearch -> searches for the rows in the table, which includes the character(s)
 * @param setRows set the Rows with the filtered rows
 * @returns search bar with live filtering
 */

export const SearchBar = ({
  setFilteredRows,
  rows,
  filterAfter,
}: SearchBarProps) => {
  const [data, setData] = useState<Sneaker[]>([]);
  const getSneakerData = () => {
    ProductService.getAll()
      .then((res: { data: React.SetStateAction<Sneaker[]> }) => {
        setData(res.data);
      })
      .catch((err: any) => {});
  };

  useEffect(() => {
    getSneakerData();
  }, []);

  let originalRows = rows.map((row) => row);

  /**
   * Request Search when at least 1 Character is typed in the searchbar
   * @param searchedVal to Search after
   */
  const requestSearch = (searchedVal: string) => {
    const filteredRows = originalRows.filter((row) => {
      return filterAfter.some((rowProperty: string) =>
        (row[rowProperty] + "")
          .toLowerCase()
          .includes(searchedVal.toLowerCase())
      );
    });
    setFilteredRows(filteredRows);
  };

  /**
   * Cancel search and reload all originalData
   */
  const cancelSearch = () => {
    originalRows = data;
    requestSearch("");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        onChange={(event) =>
          event.target.value.length
            ? requestSearch(event.target.value)
            : cancelSearch()
        }
        placeholder={"Search"}
        className={"searchBar"}
        variant={"filled"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlinedIcon></SearchOutlinedIcon>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
