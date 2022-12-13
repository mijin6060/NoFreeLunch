import { useState } from "react";
import CollectionFilter from "../src/components/CollectionFilter";
import ProductPopup from "../src/components/popup/ProductPopup";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Collection = () => {
  const [data, setData] = useState({ img: "", title: "" });
  const [toggle, setToggle] = useState(false);
  const dropDatas = [
    {
      img: "img/drops/1.jpg",
      title: "Neoh #4588",
    },
    {
      img: "img/drops/2.jpg",
      title: "Neoh #4587",
    },
    {
      img: "img/drops/3.jpg",
      title: "Neoh #4586",
    },
    {
      img: "img/drops/4.jpg",
      title: "Neoh #4585",
    },
    {
      img: "img/drops/5.jpg",
      title: "Neoh #4584",
    },
    {
      img: "img/drops/6.jpg",
      title: "Neoh #4583",
    },
    {
      img: "img/drops/7.jpg",
      title: "Neoh #4581",
    },
    {
      img: "img/drops/8.jpg",
      title: "Neoh #4580",
    },
    {
      img: "img/drops/9.jpg",
      title: "Neoh #4583",
    },
    {
      img: "img/drops/10.jpg",
      title: "Neoh #4579",
    },
    {
      img: "img/drops/11.jpg",
      title: "Neoh #4578",
    },
    {
      img: "img/drops/12.jpg",
      title: "Neoh #4577",
    },
    {
      img: "img/drops/13.jpg",
      title: "Neoh #5454",
    },
    {
      img: "img/drops/14.jpg",
      title: "Neoh #4285",
    },
    {
      img: "img/drops/15.jpg",
      title: "Neoh #4184",
    },
    {
      img: "img/drops/16.jpg",
      title: "Neoh #2583",
    },
    {
      img: "img/drops/17.jpg",
      title: "Neoh #1582",
    },
    {
      img: "img/drops/18.jpg",
      title: "Neoh #3562",
    },
  ];

  const onClick = (value) => {
    setData(dropDatas[value]);
    setToggle(true);
  };

  const { img, title } = data;
  return (
    <Layout pageName={"Collection"}>
      <ProductPopup
        open={toggle}
        close={() => setToggle(false)}
        img={img}
        title={title}
      />
      <PageBanner pageName={"Collection"} />
      <div className="neoh_fn_collectionpage">
        <div className="container wide">
          <div className="neoh_fn_collection">
            {/* Filters */}
            <CollectionFilter />
            {/* !Filters */}
            <div className="neoh_fn_clist">
              {/* Main Title */}
              <div className="neoh_fn_title" data-align="left">
                <h3 className="fn_title">All Items</h3>
                <div className="line">
                  <span />
                </div>
              </div>
              {/* !Main Title */}
              {/* Result Box */}
              <div className="neoh_fn_result_box">
                <div className="filter_count">
                  Filters <span>0</span>
                </div>
              </div>
              {/* !Result Box */}
              {/* Result List */}
              <div className="neoh_fn_result_list">
                <div className="neoh_fn_drops">
                  <ul className="grid">
                    {dropDatas.map((dropData, i) => (
                      <li className="id1 id5" key={i}>
                        <div
                          className="item"
                          data-modal-image={dropData.img}
                          data-modal-title="Neoh #4588"
                          data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                          data-modal-opensea-url="#"
                          data-modal-discord-url=""
                        >
                          <div className="img_holder">
                            <img src={dropData.img} alt="" />
                            <a
                              className="c-pointer full_link"
                              onClick={() => onClick(i)}
                            />
                          </div>
                          <div className="title_holder">
                            <h3 className="fn_title">
                              <a
                                className="c-pointer"
                                onClick={() => onClick(i)}
                              >
                                {dropData.title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* !Result List */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Collection;
