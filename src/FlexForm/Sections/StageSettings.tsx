import { FlexFormValues } from "../types";
import { FieldInputCssValueUnit, FieldInputText } from "@shared";
import { useFlexFormContext } from "FlexForm";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

export default function StageSettings() {
  const methods = useFlexFormContext();
  if (methods === null) {
    return <></>;
  }

  const { control, defaultValues } = methods;
  const {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    aspectRatio,
    padding,
    borderWidth,
    margin
  } = defaultValues.staging;

  return (
    <Grid container spacing={2} sx={{ display: "hidden" }}>
      <Grid item sm={6}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={minWidth}
          name="staging.minWidth"
          label="Min Width"
        />
      </Grid>
      <Grid item sm={6}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={maxWidth}
          name="staging.maxHeight"
          label="Max Width"
        />
      </Grid>
      <Grid item sm={6}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={minHeight}
          name="staging.minHeight"
          label="Min Height"
        />
      </Grid>
      <Grid item sm={6}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={maxHeight}
          name="staging.maxHeight"
          label="Max Height"
        />
      </Grid>
      <Grid item sm={12}>
        <FieldInputText<FlexFormValues>
          control={control}
          defaultValue={aspectRatio}
          name="staging.aspectRatio"
          label="Aspect Ratio"
        />
      </Grid>
      <Grid item sm={12}>
        <Divider variant="middle">Padding</Divider>
      </Grid>
      {/* <Grid item sm={12}>
        <InputLabel>Padding</InputLabel>
      </Grid> */}
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={padding.top}
          name="staging.padding.top"
          label="Top"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={padding.right}
          name="staging.padding.right"
          label="Right"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={padding.bottom}
          name="staging.padding.bottom"
          label="Bottom"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={padding.left}
          name="staging.padding.left"
          label="Left"
        />
      </Grid>
      <Grid item sm={12}>
        <Divider variant="middle">Border Width</Divider>
      </Grid>
      {/* <Grid item sm={12}>
        <InputLabel>Border Width</InputLabel>
      </Grid> */}
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={borderWidth.top}
          name="staging.borderWidth.top"
          label="Top"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={borderWidth.right}
          name="staging.borderWidth.right"
          label="Right"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={borderWidth.bottom}
          name="staging.borderWidth.bottom"
          label="Bottom"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={borderWidth.left}
          name="staging.borderWidth.left"
          label="Left"
        />
      </Grid>
      <Grid item sm={12}>
        <Divider variant="middle">Margin</Divider>
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={margin.top}
          name="staging.margin.top"
          label="Top"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={margin.right}
          name="staging.margin.right"
          label="Right"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={margin.bottom}
          name="staging.margin.bottom"
          label="Bottom"
        />
      </Grid>
      <Grid item sm={3}>
        <FieldInputCssValueUnit<FlexFormValues>
          control={control}
          defaultValue={margin.left}
          name="staging.margin.left"
          label="Left"
        />
      </Grid>
    </Grid>
  );
}
