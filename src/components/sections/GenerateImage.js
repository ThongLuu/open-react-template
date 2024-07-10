import * as fabric from "fabric";
import React from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import PropTypes from "prop-types";

const GenerateImage = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const { editor, onReady } = useFabricJSEditor();

  const onAddCircle = () => editor?.addCircle();
  const onAddRectangle = () => editor?.addRectangle();

  const onAddImage = () => {
    if (editor) {
      // Thêm hình ảnh vào canvas
      fabric.Image.fromURL(
        "https://tenten.vn/tin-tuc/wp-content/uploads/2023/10/url-la-gi-3.jpg"
      ).then(function (img) {
        img.set({
          //   left: 50,
          //   top: 50,
          selectable: true, // Cho phép chỉnh sửa hình ảnh
          hasControls: true, // Hiển thị các điều khiển để thay đổi kích thước
          hasBorders: true, // Hiển thị viền khi chọn
          lockMovementX: false, // Cho phép di chuyển theo trục X
          lockMovementY: false, // Cho phép di chuyển theo trục Y
        }); // Thiết lập vị trí của hình ảnh trên canvas
        editor.canvas.add(img); // Thêm hình ảnh vào canvas
        editor.canvas.setActiveObject(img);
      });
    }
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <button onClick={onAddCircle}>Add circle</button>
        <button onClick={onAddRectangle}>Add Rectangle</button>
        <button onClick={onAddImage}>Add Image</button>
        <FabricJSCanvas className="canvas-default" onReady={onReady} />
      </div>
    </section>
  );
};

GenerateImage.propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};
export default GenerateImage;
