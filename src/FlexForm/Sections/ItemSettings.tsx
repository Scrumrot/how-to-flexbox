import type { FlexFormValues, ValuesFlexItem } from "../";
import { useSyncShorthandFields } from "../";

import { FieldHidden } from "@shared";
import { useFlexFormContext, AllFlexFormMethods } from "FlexForm";
import type { ItemsKeyType } from "../useFlexForm";
import Grid from "@mui/material/Grid";
import { useWatch } from "react-hook-form";
import {
  AlignSelfField,
  FlexBasisField,
  FlexGrowField,
  FlexShrinkField,
  OrderField
} from "../Fields";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

interface ItemSettingsProps {
  index: number;
  defaultValues: ValuesFlexItem;
}

export default function ItemSettings({
  index,
  defaultValues
}: ItemSettingsProps) {
  const prefix: ItemsKeyType = `items.${index}`;
  const {
    control,
    setValue,
    getValues,
    items
  } = useFlexFormContext() as AllFlexFormMethods;
  const { remove, fields } = items;
  const itemsCount = fields.length;
  useSyncShorthandFields({ control, setValue, name: "items", index });
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
    alignItems,
    alignContent,
    gap
  } = defaultValues;
  const liveItemId = useWatch({ control, name: `${prefix}.id` });
  const activeItemId = useWatch({
    control,
    name: "meta.active.itemId"
  });
  const hidden = activeItemId !== liveItemId;

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginBottom: 2, ...(hidden ? { display: "none" } : {}) }}
    >
      <Grid item sm={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Tooltip title={`Delete`} placement="left" arrow color="error">
          <IconButton
            color="error"
            size="small"
            onClick={() => {
              if (index === itemsCount - 1) {
                setValue(
                  "meta.active.itemId",
                  getValues(`items.${index - 1}.id`)
                );
                remove(index);
                return;
              }
              setValue(
                "meta.active.itemId",
                getValues(`items.${index + 1}.id`)
              );
              remove(index);
            }}
            disabled={itemsCount <= 1}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item sm={4}>
        <FlexGrowField<"items">
          control={control}
          defaultValue={flexGrow}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4}>
        <FlexShrinkField<"items">
          control={control}
          defaultValue={flexShrink}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={4}>
        <FlexBasisField<"items">
          control={control}
          defaultValue={flexBasis}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={6}>
        <AlignSelfField<"items">
          control={control}
          defaultValue={alignSelf}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={6}>
        <OrderField<"items">
          control={control}
          defaultValue={order}
          prefix={prefix}
          hidden={hidden}
        />
      </Grid>
      <Grid item sm={6}>
        <FieldHidden<FlexFormValues>
          control={control}
          defaultValue={id}
          name={`${prefix}.id`}
        />
      </Grid>
      <Grid item sm={6}>
        <FieldHidden<FlexFormValues>
          control={control}
          defaultValue={containerId}
          name={`${prefix}.containerId`}
        />
      </Grid>
      <Grid item sm={12}>
        <FieldHidden<FlexFormValues>
          control={control}
          defaultValue={display}
          name={`${prefix}.display`}
        />
      </Grid>
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={width}
        name={`${prefix}.width`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={height}
        name={`${prefix}.height`}
      />

      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={flex}
        name={`${prefix}.flex`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={flexDirection}
        name={`${prefix}.flexDirection`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={flexWrap}
        name={`${prefix}.flexWrap`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={flexFlow}
        name={`${prefix}.flexFlow`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={justifyContent}
        name={`${prefix}.justifyContent`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={alignItems}
        name={`${prefix}.alignItems`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={alignContent}
        name={`${prefix}.alignContent`}
      />
      <FieldHidden<FlexFormValues>
        control={control}
        defaultValue={gap}
        name={`${prefix}.gap`}
      />
    </Grid>
  );
}
