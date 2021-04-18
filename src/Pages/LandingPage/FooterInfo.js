import React from "react";

const FooterInfo = (props) => {
  return (
    <div className="col-md-3">
      <h4 className="text-success">
        {props.menuTitle ? props.menuTitle : " "}
      </h4>
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <div>
            <img src={item.icon} className="img-fluid" />

            <li key={index}>
              <h5 className="text-light">{item.name}</h5>
            </li>
          </div>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterInfo;
