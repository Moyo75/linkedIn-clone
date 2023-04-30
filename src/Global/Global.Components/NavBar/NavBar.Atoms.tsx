import { FC, FunctionComponent } from "react";
import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  position: relative;
  margin: auto;
  max-width: 1128px;
  padding-top: 12px;
  padding-bottom: 16px;
  background-color: transparent;
  justify-content: space-between;
`;

export const SelectArrowDownButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--nav-join-button-text-color);
  align-items: center;
  cursor: pointer;
  border-radius: 5px 0 0 5px;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 1px;
  border-style: solid;
  padding-left: 15px;
  padding-right: 15px;
  background-color: var(--nav-input-section-bg);
  border-color: var(--nav-input-border-right-color);
`;

export const SelectInputSearchWrapper = styled.nav`
  display: flex;
  flex-grow: 1;
  margin-left: 32px;
  margin-right: 32px;
`;

export const NavBarSVGLogo = styled.svg``;

export const NavBarLogo = styled.img`
  width: 135px;
  height: 34px;
`;

export const NavBarSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: var(--nav-input-section-bg);
  border: none;
  :-ms-expand {
    display: none;
  }
`;

export const NavBarOption = styled.option``;

export const OuterInputWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 0px;
  background-color: var(--nav-input-section-bg);
`;

export const InputWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 9px 16px 9px 16px;
  border-top-width: 0;
  border-left-width: 0;
  border-bottom-width: 0;
  border-right-width: 1px;
  border-style: solid;
  background-color: var(--nav-input-section-bg);
  border-color: var(--nav-input-border-right-color);
`;

// height: 74%;

export const NavBarInput = styled.input`
  display: flex;
  width: 100%;
  font-size: 16px;
  autocomplete: off;
  align-items: center;
  border: 1px solid transparent;
  background-color: transparent;
  :placeholder {
    font-size: 16px;
  }
  :focus {
    outline: none;
  }
`;

export const NavSearchIconWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 0px 5px 5px 0px;
  background-color: var(--nav-input-section-bg);
`;

export const NavButtonsWrapper = styled.section`
  display: flex;
  flex-gap: 10px;
  justify-content: space-between;
  flex-wrap: nowrap;
  min-width: 230px;
  flex-shrink: 0;
`;

export const RoundButton = styled.button`
  background-color: transparent;
  height: min-content;
  border-radius: 24px;
  cursor: pointer;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  font-size: 16px;
  min-height: 48px;
`;

export const NavBarDropdown: FC<{ items: string[] }> = ({ items }) => (
  <NavBarSelect>
    {items.map((item) => (
      <NavBarOption>{item}</NavBarOption>
    ))}
  </NavBarSelect>
);

// export const NavBarJoinButton: FunctionComponent<{
//   text: string;
//   textColor: string;
//   borderColor?: string;
// }> = ({ text, borderColor, textColor }) => (
//   <RoundButton
//     className="fontFamily"
//     style={{
//       fontWeight: "600",
//       border: borderColor ? `1px solid ${borderColor}` : "none",
//       color: textColor ? textColor : "#000000",
//     }}
//   >
//     {text}
//   </RoundButton>
// );

export const NavBarJoinButton: FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    text: string;
    borderColor?: string;
    textColor: string;
  }
> = ({
  text,
  borderColor,
  textColor,
  ...rest
}: {
  text: string;
  borderColor?: string;
  textColor: string;
}) => (
  <RoundButton
    className="fontFamily"
    style={{
      fontWeight: "500",
      border: borderColor ? `1px solid ${borderColor}` : "none",
      color: textColor ? textColor : "#000",
    }}
    {...rest}
  >
    {text}
  </RoundButton>
);
