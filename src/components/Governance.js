import { newLineStr } from "../../utils/newLineStr";
import { useTranslation } from "next-i18next";

const Governance = () => {
  const { t } = useTranslation("common");
  return (
    <section id="vision">
      <div className="container">
        <div className="neoh_fn_title">
          <h3 className="fn_title">What is Governance?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        <div className="neoh_fn_gualist">
          <ul>
            {t("gov_item", { returnObjects: true }).map((item, index) => {
              return (
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src={item.image} alt="" className="fn__svg" />
                    <h3 className="fn_title">{item.title}</h3>
                    <p className="fn_desc fn_animated_text">{item.des}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Governance;
