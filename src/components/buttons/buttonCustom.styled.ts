import colors from "@/shared/themes/colors";
import styled from "styled-components";

interface ButtonCustomsProps {
  backgroundColor: string;
  size: string;
  border: string;
}
export const ButtonCustoms = styled.button<ButtonCustomsProps>`
  background-color: ${(props: any) => props.backgroundColor};
  width: ${(props: any) =>
     (props.size === "small" && "5rem") ||
     (props.size === "medium" && "7rem") ||
     (props.size === "large" && "14rem")};
  border: none;
  border-radius: ${(props: any) => props.border};
  display: flex;
  flex-direction: row;
  padding: 8px;
  color: ${colors.light};
  justify-content: space-around;
  place-items: center;
  gap: 2px;
  font-size: ${(props: any) =>
    (props.size === "small" && "10px") ||
    (props.size === "medium" && "12px") ||
    (props.size === "large" && "16px")};
`;

interface IconWrapperProps {
    color: string;
  }
  
  export const IconWrapper = styled.div<IconWrapperProps>`
    display: flex;
    place-content: center;
    color: ${(props) => props.color};
  `;
  
  export const ListItemText = styled.div<IconWrapperProps>`
  display: flex;
  place-content: center;
  color: ${(props) => props.color};

`;