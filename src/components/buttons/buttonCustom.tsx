import React from "react";
import { IconType } from "react-icons";

import {
  ButtonCustoms,
  IconWrapper,
  ListItemText,
} from "./buttonCustom.styled";
import colors from "@/shared/themes/colors";
interface ListItemProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  icon?: IconType;
  size?: string;
  types: "submit" | "button"
  text: string | number;
  onClick?: () => void;
}

const ButtonCustom: React.FC<ListItemProps> = ({
  backgroundColor = colors.primary,
  border = "2px",
  color = "white",
  size = "medium",
  types,
  text,
  icon: Icon,
  ...props
}) => {
  return (
      <ButtonCustoms
        backgroundColor={backgroundColor}
        size={size}
        border={border}
        type={types}
        {...props}
      >
        <ListItemText color={color}>{text}</ListItemText>
        {Icon && (
          <IconWrapper color={color}>
            <Icon />
          </IconWrapper>
        )}
      </ButtonCustoms>
  );
};

export default ButtonCustom;
