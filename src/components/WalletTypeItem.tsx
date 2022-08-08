import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "@elements/Text";
import FONTS from "@utils/fonts";
import colors from "@utils/colors";
import { ICON } from "@svg/Icon";
import { IMAGE_ICON } from "@assets/Icon";
import { WALLET } from "@store/models";

interface Props {
  style?: object;
  id?: string;
  name?: string;
  icon?: string;
  // imageIcon?: any;
  wallet?: WALLET;
  isAllWallet?: boolean;
  isChose?: number;
  disabled?: boolean;
  onPress?: (item: any) => void;
}

const WalletTypeItem = ({
  id,
  isChose,
  name,
  icon,
  // imageIcon,
  wallet,
  style,
  onPress,
  disabled,
}: Props) => {
  const checkStyle = id == isChose ? styles.activeStyle : styles.inActiveStyle;
  const bold = id == isChose;
  const textColor = id == isChose ? colors.grey1 : colors.grey1;

  const sourceImageIcon = IMAGE_ICON[`${wallet?.typeWallet.icon || icon}`];

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, style]}
    >
      {wallet?.typeWallet.icon || icon ? (
        <Image style={styles.imageIcon} source={sourceImageIcon} />
      ) : (
        <View style={styles.iconDefault} />
      )}
      <Text color={textColor} bold={bold} size={16} marginLeft={8}>
        {wallet?.name || name}
      </Text>
      <View style={[styles.checkBox, checkStyle]}>{ICON.check}</View>
    </TouchableOpacity>
  );
};

export default WalletTypeItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.snow,
    height: 70,
  },
  icon: {},
  imageIcon: {
    width: 24,
    height: 24,
  },
  iconDefault: {
    width: 24,
    height: 24,
  },
  checkBox: {
    position: "absolute",
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  inActiveStyle: {
    borderColor: colors.lightSlateGrey,
  },
  activeStyle: {
    backgroundColor: colors.emerald,
    borderWidth: 0,
  },
});
