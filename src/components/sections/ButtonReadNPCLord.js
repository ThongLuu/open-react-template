import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";

const ButtonReadNPCLord = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "button-npc-lord section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "button-npc-lord-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="button-npc-lord-content">
            <div className="container">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                <Button className="button-reacd-npc-lord" tag="a" wideMobile>
                  Read NPC's Lord
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ButtonReadNPCLord.propTypes = { ...SectionProps.types };

export default ButtonReadNPCLord;
