import React from "react";

type Props = {
  infoImg: string;
  name: string;
  job: string;
};

function Avatar(props: Props) {
  return (
    <div className="avatar_container inline-flex flex-col items-center">
      <img src={props.infoImg} alt="" />
      <h3 className="text-2xl text-gray-500 uppercase font-medium">
        {props.name}
      </h3>
      <span className="textSpanBI5">{props.job}</span>
    </div>
  );
}

export default Avatar;
