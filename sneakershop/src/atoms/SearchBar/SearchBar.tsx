import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export type SearchBarForTableProps = {
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
}: SearchBarForTableProps) => {
  const originalRows = rows.map((row) => row);

  const requestSearch = (searchedVal: string) => {
    let filteredRows = originalRows.filter((row) => {
      return filterAfter.some((rowProperty: string) =>
        (row[rowProperty] + "")
          .toLowerCase()
          .includes(searchedVal.toLowerCase())
      );
    });
    setFilteredRows(filteredRows);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        onChange={(event) => requestSearch(event.target.value)}
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
