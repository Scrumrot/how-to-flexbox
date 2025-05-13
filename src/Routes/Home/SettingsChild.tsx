import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper, { PaperProps } from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Tabs, Tab, Tooltip, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  ItemSettings,
  useFlexFormContext,
  AllFlexFormMethods,
  makeItem
} from "FlexForm";
import { useWatch } from "react-hook-form";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function SettingsChild({
  sx,
  ...rest
}: Omit<PaperProps, "children">) {
  const methods = useFlexFormContext() as AllFlexFormMethods;
  const items = methods ? methods.items.fields : [];
  const append = methods.items.append;
  const activeItemID = useWatch({
    control: methods.control,
    name: "meta.active.itemId"
  });
  const activeContainerId = useWatch({
    control: methods.control,
    name: "meta.active.containerId"
  });
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    methods.setValue("meta.active.itemId", newValue);
  };

  return (
    <Paper sx={{ flex: "1 1 50%", ...(sx || {}) }} {...rest}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="stretch"
        justifyContent="stretch"
      >
        {/* <Grid item sm={12} alignItems="center" justifyContent="center">
          <Typography variant="h6">Item Settings</Typography>
          <Divider />
        </Grid> */}
        <Grid item sm={12} alignItems="center" justifyContent="center">
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              mb: 2,
              display: "flex",
              gap: 2
            }}
          >
            <Tabs
              value={activeItemID}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ flexGrow: 1 }}
            >
              {items
                .filter((item) => item.containerId === activeContainerId)
                .map(({ id }, index) => (
                  <Tab
                    key={id}
                    label={`Item ${index + 1}`}
                    value={id}
                    {...a11yProps(index)}
                  />
                ))}
            </Tabs>
            <Tooltip title={`Add Child`} placement="top" arrow color="success">
              <IconButton
                size="small"
                sx={{ alignSelf: "center", mt: `-1px` }}
                onClick={() => {
                  append(makeItem(activeContainerId));
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          {items.map(({ fakeKey, ...defaultValues }, index) => (
            <ItemSettings
              key={fakeKey}
              index={index}
              defaultValues={defaultValues}
            />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}
