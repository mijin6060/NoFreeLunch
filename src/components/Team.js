import { newLineStr } from "../../utils/newLineStr";
import { useTranslation } from "next-i18next";

const Team = () => {
  const { t } = useTranslation("common");
  return (
    <section id="team">
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Our Team</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Team List Shortcode */}
        <div className="neoh_fn_team">
          <ul className="team_list">
            {t("team", { returnObjects: true }).map((item, index) => {
              return (
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">{item.name}</h3>
                        <p className="fn_desc">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* !Team List Shortcode */}
      </div>
    </section>
  );
};

export default Team;
