import { FlexFormValues, useSyncShorthandFields } from "../";
import { FieldInputSwitch, FieldInputCssValueUnit, FieldHidden } from "@shared";
import {
  UseContainersFieldArrayMethods,
  ValuesFlexContainer,
  FlexGetValuesType,
  ContainersKeyType,
  FlexControlType,
  FlexSetValueType
} from "FlexForm";

import Grid from "@mui/material/Grid";
import { useWatch } from "react-hook-form";

import {
  AlignContentField,
  AlignItemsField,
  DisplayField,
  FlexDirectionField,
  FlexFlowField,
  FlexWrapField,
  GapField,
  JustifyContentField
} from "../Fields";

import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ContainerSettingsProps {
  index: number;
  defaultValues: ValuesFlexContainer;
  control: FlexControlType;
  setValue: FlexSetValueType;
  containers: UseContainersFieldArrayMethods;
  containersCount: number;
  getValues: FlexGetValuesType;
}

export default function ContainerSettings({
  index = 0,
  defaultValues,
  control,
  setValue,
  containers,
  getValues
}: ContainerSettingsProps) {
  const prefix: ContainersKeyType = `containers.${index}`;
  const { remove, fields } = containers;

  const containersCount = fields.length;
  useSyncShorthandFields({ control, setValue, name: "containers", index });
  const activeContainerId = useWatch({
    control,
    name: "meta.active.containerId"
  });

  const {
    id,
    containerId,
    display,
    width,
    height,
    flexBasis,
    order,
    flexGrow,
    flexShrink,
    alignSelf,
    flex,
    flexDirection,
    flexWrap,
    flexFlow,
    justifyContent,
    mainAxis,
    crossAxis,
    alignItems,
    alignContent,
    gap
  } = defaultValues;
  const liveContainerId = useWatch({ control, name: `${prefix}.id` });
  const hidden = activeContainerId !== liveContainerId;
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginBottom: 2, ...(hidden ? { display: "none" } : {}) }}
    >
      <Grid item sm={4}>
        <FieldInputSwitch<FlexFormValues>
          control={control}
          defaultValue={mainAxis}
          name={`${prefix}.mainAxis`}
          label="Main Axis"
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4}>
        <FieldInputSwitch<FlexFormValues>
          control={control}
          defaultValue={crossAxis}
          name={`${prefix}.crossAxis`}
          label="Cross Axis"
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Tooltip title={`Delete`} placement="left" arrow color="error">
          <IconButton
            color="error"
            size="small"
            onClick={() => {
              if (index === containersCount - 1) {
                setValue(
                  "meta.active.containerId",
                  getValues(`containers.${index - 1}.id`)
                );
                remove(index);
                return;
              }
              setValue(
                "meta.active.containerId",
                getValues(`containers.${index + 1}.id`)
              );
              remove(index);
            }}
            disabled={containersCount <= 1}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item sm={4}>
        <DisplayField<"containers">
          control={control}
          defaultValue={display}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4}>
        <FlexDirectionField<"containers">
          control={control}
          defaultValue={flexDirection}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4}>
        <FlexWrapField<"containers">
          control={control}
          defaultValue={flexWrap}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4}>
        <JustifyContentField<"containers">
          control={control}
          defaultValue={justifyContent}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4}>
        <AlignItemsField<"containers">
          control={control}
          defaultValue={alignItems}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4}>
        <AlignContentField<"containers">
          control={control}
          defaultValue={alignContent}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>

      <Grid item sm={4}>
        <GapField<"containers">
          control={control}
          defaultValue={gap}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>

      <Grid item sm={4}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={width}
          name={`${prefix}.width`}
          label="Width"
        />
      </Grid>
      <Grid item sm={4}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={height}
          name={`${prefix}.height`}
          // defaultValuesFlexItem
          label="Height"
        />
      </Grid>
      <FlexFlowField<"containers">
        control={control}
        defaultValue={flexFlow}
        prefix={prefix}
        hidden={true}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={id}
        name={`${prefix}.id`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={containerId}
        name={`${prefix}.containerId`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={flexBasis}
        name={`${prefix}.flexBasis`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={order}
        name={`${prefix}.order`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={flexGrow}
        name={`${prefix}.flexGrow`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={flexShrink}
        name={`${prefix}.flexShrink`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={alignSelf}
        name={`${prefix}.alignSelf`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={flex}
        name={`${prefix}.flex`}
      />
    </Grid>
  );
}
