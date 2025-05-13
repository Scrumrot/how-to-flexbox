import { Layout } from "@shared";
import { Grid } from "@mui/material";
import SettingParent from "./SettingsParent";
import SettingsChild from "./SettingsChild";
import SectionOutput from "./SectionOutput";
import SectionStage from "./SectionStage";
import SettingsStage from "./SettingsStage";
import { FlexForm, createFlexFormValues } from "FlexForm";
import { useState } from "react";
const defaultVaules = createFlexFormValues();

export default function Home() {
  const [{ stageSize, outputSize }, setGridSizes] = useState({
    stageSize: 9,
    outputSize: 3
  });
  return (
    <FlexForm defaultVaules={defaultVaules}>
      <Layout title="How to Flex 💪">
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          wrap="nowrap"
          sx={{ flex: "1 1 auto", p: 2 }}
        >
          <Grid
            item
            sm={stageSize}
            alignItems="stretch"
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "100%",
              alignItems: "stretch",
              justifyContent: "stretch",
              transition:
                "max-width 150ms ease-in-out, flex-basis 150ms ease-in-out"
            }}
            onClick={() => {
              setGridSizes({ stageSize: 9, outputSize: 3 });
            }}
          >
            <SectionStage sx={{ flex: "1 1 100%", p: 1, gap: 2 }} />
          </Grid>
          <Grid
            item
            sm={outputSize}
            gap={2}
            alignItems="stretch"
            sx={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "100%",
              transition:
                "max-width 150ms ease-in-out, flex-basis 150ms ease-in-out"
            }}
            onClick={() => {
              setGridSizes({ stageSize: 6, outputSize: 6 });
            }}
          >
            <SettingsStage
              sx={{
                display: "none"
              }}
            />
            <SectionOutput
              sx={{
                p: 1
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          sx={{ flex: "0 1 auto", p: 2 }}
        >
          <Grid
            item
            sm={12}
            alignItems="stretch"
            gap={2}
            sx={{ display: "flex", maxWith: "100%" }}
          >
            <Grid item sm={6} alignItems="stretch" sx={{ display: "flex" }}>
              <SettingParent sx={{ flex: "1 1 100%", p: 1, pt: 0 }} />
            </Grid>
            <Grid item sm={6} alignItems="stretch" sx={{ display: "flex" }}>
              <SettingsChild sx={{ flex: "1 1 100%", p: 1, pt: 0 }} />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </FlexForm>
  );
}
