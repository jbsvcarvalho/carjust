import React from "react";
import { IconType } from "react-icons";

import colors from "@/shared/themes/colors"; // Certifique-se de que este caminho esteja correto

interface ListItemProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  icon?: IconType;
  size?: string;
  filter: boolean;
  text?: number | string;
  onClick?: () => void;
}
export const Container = ({ children }: any) => (
  <div className="hover:brightness-90">{children}</div>
);

export const ButtonCustoms = ({
  backgroundColor,
  size,
  border,
  children,
  color,
  ...props
}: any) => {
  return (
    <button
      className={`bg-${backgroundColor} border-none rounded-${border} flex flex-row p-2 gap-2 text-blue-700 justify-around items-center`}
      {...props}
    >
      {children}
    </button>
  );
};
export const IconWrapper = ({ color, children }: any) => {
  return (
    <div className={`flex justify-center items-center text-blue-700`}>
      {children}
    </div>
  );
};

export const ListItemText = ({
  color,
  backgroundColor,
  filter,
  children,
}: any) => {
  const filterClass = filter ? "filter brightness-100" : "";

  return (
    <div
      className={`flex justify-center items-center bg-${backgroundColor} ${filterClass} rounded-full  text-blue-500 `}
    >
      {children}
    </div>
  );
};

const ButtonCart: React.FC<ListItemProps> = ({
  backgroundColor = colors.primary,
  border = "5px",
  color = "blue-950",
  size = "small",
  filter,
  text,
  icon: Icon,
  ...props
}) => {
  return (
    <Container>
      <ButtonCustoms
        backgroundColor={backgroundColor}
        size={size}
        border={border}
        color={color}
        {...props}
      >
        {Icon && (
          <IconWrapper size={size} color={color}>
            <Icon />
          </IconWrapper>
        )}
        {text !== undefined && (
          <ListItemText
            backgroundColor={backgroundColor}
            size={size}
            color={color}
            filter={filter}
          >
            {text}
          </ListItemText>
        )}
      </ButtonCustoms>
    </Container>
  );
};

export default ButtonCart;
