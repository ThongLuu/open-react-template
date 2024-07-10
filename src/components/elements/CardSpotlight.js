import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

const defaultProps = {
  children: null,
  name: undefined,
  value: undefined,
  disabled: false,
  checked: undefined,
};

const CardSpotlight = ({
  className,
  children,
  name,
  value,
  disabled,
  checked,
  ...props
}) => {
  const classes = classNames("form-checkbox", className);

  return (
    <div class="card">
      <img src="img_avatar.png" alt="Avatar" style="width:100%" />
      <div class="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default CardSpotlight;
