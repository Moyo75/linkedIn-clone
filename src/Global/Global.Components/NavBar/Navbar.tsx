import { Search } from "tabler-icons-react";

import {
  NavBarInput,
  OuterInputWrapper,
  NavBarWrapper,
  NavButtonsWrapper,
  NavBarJoinButton,
  SelectInputSearchWrapper,
  NavSearchIconWrapper,
  SelectArrowDownButton,
  InputWrapper,
} from "./NavBar.Atoms";

import LinkedInLogo from "../../../assets/LinkedIn_Navbar_Logo.png";
import ArrowDown from "./NavBar.Components/ArrowDown";
import EraseX from "./NavBar.Components/EraseX";
import LinkedInSVGLogo from "./NavBar.Components/LinkedInLogo";

export default function Navbar() {
  return (
    <NavBarWrapper>
      <LinkedInSVGLogo />
      <SelectInputSearchWrapper>
        <SelectArrowDownButton className={"fontFamily"}>
          {/* <NavBarDropdown items={["Jobs", "People", "Learning"]} /> */}
          <span>Jobs</span>
          <ArrowDown />
        </SelectArrowDownButton>
        <OuterInputWrapper>
          <InputWrapper>
            <NavBarInput
              className={"fontFamily"}
              placeholder="Search job titles or companies"
              maxLength={500}
            />
          </InputWrapper>
          <InputWrapper>
            <NavBarInput
              className={"fontFamily"}
              placeholder="Location"
              maxLength={500}
            />
            <EraseX />
          </InputWrapper>
        </OuterInputWrapper>
        <NavSearchIconWrapper>
          <Search color={"#7c8b99"} />
        </NavSearchIconWrapper>
      </SelectInputSearchWrapper>
      <NavButtonsWrapper>
        <NavBarJoinButton
          className={"navJoinButton fontFamily"}
          text={"Join now"}
          textColor={"#000000bf"}
        />
        <NavBarJoinButton
          className={"navSignInButton fontFamily"}
          text={"Sign in"}
          textColor={"#0a66c2"}
          borderColor={"#b3c5d7"}
          // borderColor={"#004182"}
        />
      </NavButtonsWrapper>
    </NavBarWrapper>
  );
}
