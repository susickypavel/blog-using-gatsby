import React, { HtmlHTMLAttributes } from "react"
import styled from "@utils/styled"
import { THEMETOGGLE_BG, THEMETOGGLE_SLIDER_BG, THEMETOGGLE_BG_CHECKED } from "@css/constants"

const ToggleSwitch = styled.label`
  position: fixed;
  top: 8px;
  right: 8px;
  width: 60px;
  height: 34px;

  & input {
    display: none;
  }

  & input:checked + .slider {
    background: ${THEMETOGGLE_BG_CHECKED};
  }

  & input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  & input:checked + .slider:before {
    transform: translateX(26px);
  }
`

const ToggleSlider = styled.span`
  position: absolute;
  border-radius: 34px;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: ${THEMETOGGLE_BG};
  transition: 0.4s;

  cursor: pointer;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: ${THEMETOGGLE_SLIDER_BG};
    transition: 0.4s;
  }
`

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {}

const ThemeToggle: React.FC<Props> = props => {
  return (
    <ToggleSwitch>
      <input type="checkbox" {...props} />
      <ToggleSlider className="slider" />
    </ToggleSwitch>
  )
}

export default ThemeToggle
