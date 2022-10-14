import React from "react";

type Props = {
  infoIcon: JSX.Element[];
  textTitle: string[];
  textContent: string[];
};

function Information(props: Props) {
  return (
    <>
      <div className="infomation_container flex justify-between m-3 p-2 text-gray-500 border-b-2 border-dashed">
        <div className="content_1">
          <div className="contentIcon inline-block">{props.infoIcon[0]}</div>
          <div className="contentTitle inline-block">{props.textTitle[0]}</div>
        </div>
        <span className="content_2">{props.textContent[0]}</span>
      </div>
      <div className="infomation_container flex justify-between m-3 p-2 text-gray-500 border-b-2 border-dashed">
        <div className="content_1">
          <div className="contentIcon inline-block mr-2">
            {props.infoIcon[1]}
          </div>
          <div className="contentTitle inline-block">{props.textTitle[1]}</div>
        </div>
        <span className="content_2">{props.textContent[1]}</span>
      </div>
      <div className="infomation_container flex justify-between m-3 p-2 text-gray-500 border-b-2 border-dashed">
        <div className="content_1">
          <div className="contentIcon inline-block mr-2">
            {props.infoIcon[2]}
          </div>
          <div className="contentTitle inline-block">{props.textTitle[2]}</div>
        </div>
        <span className="content_2">{props.textContent[2]}</span>
      </div>
      <div className="infomation_container flex justify-between m-3 p-2 text-gray-500 border-b-2 border-dashed">
        <div className="content_1">
          <div className="contentIcon inline-block mr-2">
            {props.infoIcon[3]}
          </div>
          <div className="contentTitle inline-block">{props.textTitle[3]}</div>
        </div>
        <span className="content_2">{props.textContent[3]}</span>
      </div>
    </>
  );
}

export default Information;
