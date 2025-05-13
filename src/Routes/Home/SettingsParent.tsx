import Grid from "@mui/material/Grid";
import Paper, { PaperProps } from "@mui/material/Paper";
import { Tabs, Tab, Box, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  ContainerSettings,
  useFlexFormContext,
  AllFlexFormMethods,
  createContainerAndItems
} from "FlexForm";
import { useWatch } from "react-hook-form";
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
export default function SettingsParent({
  sx,
  ...rest
}: Omit<PaperProps, "children">) {
  const methods = useFlexFormContext() as AllFlexFormMethods;
  const containers = methods ? methods.containers.fields : [];

  const append = methods.containers.append;
  const activeContainerId = useWatch({
    control: methods.control,
    name: "meta.active.containerId"
  });
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    const items = methods.getValues("items");
    const firstItem = items.filter((it) => it.containerId === newValue)[0];

    console.log("firstItem", firstItem);
    if (firstItem) {
      methods.setValue("meta.active.itemId", firstItem.id);
    }
    methods.setValue("meta.active.containerId", newValue);
  };
  console.log("SettingsParent containerId", containers);
  return (
    <Paper sx={{ flex: "1 1 50%", p: 1, ...(sx || {}) }} {...rest}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="stretch"
        justifyContent="stretch"
      >
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
              value={activeContainerId}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ flexGrow: 1 }}
            >
              {containers.map(({ id }, index) => (
                <Tab
                  key={id}
                  label={`Container ${index + 1}`}
                  value={id}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
            <Tooltip
              title={`Add Container`}
              placement="top"
              arrow
              color="success"
            >
              <IconButton
                size="small"
                sx={{ alignSelf: "center", mt: `-1px` }}
                onClick={() => {
                  const numberOfChildren = methods.getValues(
                    "meta.defaultNumberOfItems"
                  );
                  const { container, items } = createContainerAndItems(
                    numberOfChildren
                  );
                  append(container);
                  items.forEach((item) => methods.items.append(item));
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          {containers.map(({ fakeKey, ...defaultValues }, index) => (
            <ContainerSettings
              key={fakeKey}
              defaultValues={defaultValues}
              containers={methods.containers}
              control={methods.control}
              setValue={methods.setValue}
              getValues={methods.getValues}
              index={index}
              containersCount={(containers || []).length}
            />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}
