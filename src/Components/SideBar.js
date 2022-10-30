import React, { useState } from "react";
import { sideBarData } from "../Data/SideBarData";
import "../CSS/SideBar.css";
import { useDispatch } from "react-redux";
import { setSelect } from "../Slice/AdminSlice";

export const SideBar = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("1");
  const [className, setClassName] = useState("1");

  return (
    <div className="side_bar">
      <br />
      <br />
      <ul>
        <div>SAG corp</div>
        <br />
        <div>@Pluto</div>
        <br />
        {sideBarData.map((data) => {
          return (
            <li
              className={"sideBar_list"}
              id={selected === data.id ? "act" : ""}
              key={data.id}
              onMouseEnter={(e) => {
                setSelected("");
              }}
              onMouseLeave={(e) => {
                setSelected(className);
              }}
              onClick={(e) => {
                setClassName(data.id);
                dispatch(setSelect(data.title));
              }}
            >
              {data.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
