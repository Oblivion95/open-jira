import { Button, Box, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { useEntries } from "@core/store/context/entries/entries";
import { useUIContext } from "@core/store/context/ui/ui.context";

const NewEntry = () => {
  const [input, setInput] = useState('')
  const [touched, setTouched] = useState<any>(false);
  const  { addNewEntry } = useEntries();
  const { isAdding, toggleAddingEntry } = useUIContext();

  const reset = () =>  {
    setInput('');
    toggleAddingEntry(false);
    setTouched(false);
  }

  const handleAddNewEntry = () => {
    if (!input.length) return;

    addNewEntry(input);
    reset();
  };

  const handleCancel = () => reset();

  return (
    <Box
      sx={{
        marginY: 2,
        paddingX: 2,
      }}
    >
      {isAdding && (
        <>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
            sx={{
              marginTop: 2,
              marginBottom: 1,
            }}
            placeholder=""
            autoFocus
            multiline
            label="New entry"
            helperText={input.length <= 0 && touched && 'This field is required'}
            error={input.length <= 0 && touched}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={handleCancel}>Cancel</Button>
            <Button color="secondary" variant="outlined" endIcon={<SaveIcon />} onClick={handleAddNewEntry}>
              Save
            </Button>
          </Box>
        </>
      )}
      {!isAdding && (
        <Button startIcon={<AddCircleIcon />} fullWidth variant="outlined" onClick={() => toggleAddingEntry(!isAdding)}>
          Add
        </Button>
      )}
    </Box>
  );
};

export default NewEntry;
