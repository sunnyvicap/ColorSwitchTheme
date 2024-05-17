import { useCallback, useState } from "react";
import { Divider, Menu } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface OptionMenuProps {
  onSelectTheme: (theme: string) => void;
}

const OptionMenu : React.FC<OptionMenuProps> = ({ onSelectTheme }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleThemeSelection = (theme: any) => {
    onSelectTheme(theme);
    closeMenu();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<MaterialCommunityIcons name="dots-vertical" size={25} onPress={openMenu} />}>
      <Menu.Item onPress={() =>  handleThemeSelection('Green')} title="Green theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Pink')} title="Pink theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Purple')} title="Purple theme" />
      <Divider />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Red')} title="Red theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Blue')} title="Blue theme" />
      <Divider />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Indigo')} title="Indigo theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Cyan')} title="Cyan theme" />
      <Divider />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Amber')} title="Amber theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Orange')} title="Orange theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Deep Orange')} title="Deep Orange theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Brown')} title="Brown theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Light')} title="Light theme" />
      <Divider />
      <Menu.Item onPress={() => handleThemeSelection('Dark')} title="Dark theme" />
    </Menu>

  );
};

export default OptionMenu;