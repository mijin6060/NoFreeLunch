import { Box } from "@mui/material";
import { newLineStr } from "../../utils/newLineStr";
import { useTranslation } from "next-i18next";

const ServicesComponent = () => {
  const { t } = useTranslation("common");
  return (
    <section id="services">
      {/* Dividers */}

      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">No Free Lunch Process</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            {t("our_gov", { returnObjects: true }).map((item, index) => {
              return (
                <li>
                  <div className="item">
                    <div className="item_num">
                      <span>{item.index}</span>
                    </div>
                    <div className="item_content">
                      <h3 className="fn_title">{item.title}</h3>
                      <p className="fn_desc fn_animated_text">{item.des}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
