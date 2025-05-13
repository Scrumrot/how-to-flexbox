import Root, { RootProps } from './Root';
import Head, { HeadProps } from './Head';
import SettingsDrawer from '../Settings/SettingsDrawer';
export type RootHeaderProps = HeadProps & RootProps;

export type PageProps = RootHeaderProps;
export default function Page({
  title,
  description,
  children,
  ...rest
}: PageProps) {
  return (
    <Root {...rest}>
      <Head title={title} description={description} />
      {children}
      <SettingsDrawer />
    </Root>
  );
}
