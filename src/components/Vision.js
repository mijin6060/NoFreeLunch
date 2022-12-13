import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const Vision = () => {
  const { t } = useTranslation("common");
  return (
    <section id="video">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      {/* Video Shortcode */}
      <div className="neoh_fn_video">
        <div className="bg_overlay">
          <div className="bg_image" data-bg-img="img/about/vision_bg.png" />
          <div className="bg_color" />
        </div>
        <div className="v_content">
          <div className="neoh_fn_title">
            <h3 className="fn_title">Our Vision</h3>
            <p className="fn_desc fn_animated_text">{t("vision_sub_title")}</p>
            <p className="fn_desc fn_animated_text">{t("vision_des")}</p>
          </div>
        </div>
      </div>
      {/* !Video Shortcode */}
    </section>
  );
};
export default Vision;
