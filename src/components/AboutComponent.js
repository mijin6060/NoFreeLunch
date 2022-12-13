import Link from "next/link";
import { newLineStr } from "../../utils/newLineStr";
import { useTranslation } from "next-i18next";
import { Box } from "@mui/material";
const AboutComponent = () => {
  const { t } = useTranslation("common");
  return (
    <section id="about">
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/about_Dao.jpg" alt="hero_main" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">{newLineStr(t("about_dao_title"))}</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">{newLineStr(t("about_dao_des"))}</div>
            {/* <div className="buttons">
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div> */}
          </div>
        </div>
        {/* !About Item #1 */}
      </div>
    </section>
  );
};
export default AboutComponent;
