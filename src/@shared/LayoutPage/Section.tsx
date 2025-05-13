import Box, { BoxProps } from '@mui/material/Box';
export type SectionProps = BoxProps;

export default function Section({ children, sx, ...rest }: SectionProps) {
  return (
    <Box
      sx={{
        width: '100%',
        minWidth: '1px',
        flex: (theme) => `0 0 calc(100vh - 64px - ${theme.spacing(4)})`,
        display: 'flex',
        flexDirection: 'column',
        ...(sx || {}),
      }}
      component={'section'}
      {...rest}
    >
      {children}
    </Box>
  );
}
