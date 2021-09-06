import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IButtonProps {
  scheme: "green" | "blue" | "gray";
  size: "small" | "medium" | "large";
  full?: boolean;
}

export const Press = styled.button<IButtonProps>`
  width: ${(props) => (props.full === false ? "" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    (props.scheme === "gray" && theme.gray.default) ||
    (props.scheme === "blue" && theme.blue.default) ||
    (props.scheme === "green" && theme.green.default)};
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  height: ${(props) =>
    (props.size === "small" && "30px") ||
    (props.size === "medium" && "38px") ||
    (props.size === "large" && "45px")};
  cursor: pointer;
  border-radius: ${(props) => props.theme.radius};
  font-size: ${(props) =>
    (props.size === "small" && "1.2em") ||
    (props.size === "medium" && "1.5em") ||
    (props.size === "large" && "1.8em")};
  color: white;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: ${(props) =>
      (props.scheme === "gray" && theme.gray.dark) ||
      (props.scheme === "blue" && theme.blue.dark) ||
      (props.scheme === "green" && theme.green.dark)};
    transform: scale(1.01);
  }
  &:active {
    background: ${(props) =>
      (props.scheme === "gray" && theme.gray.default) ||
      (props.scheme === "blue" && theme.blue.default) ||
      (props.scheme === "green" && theme.green.default)};
    transform: scale(1);
  }

  &:disabled {
    transform: scale(1);
    background: ${(props) =>
      (props.scheme === "gray" && theme.gray.disable) ||
      (props.scheme === "blue" && theme.blue.disable) ||
      (props.scheme === "green" && theme.green.disable)};
    cursor: not-allowed;
  }
`;
