import React from "react";
import { useSelector } from "react-redux";
import UploadScreen from "../components/screens/upload-screen";
import * as Screens from "../constants/screens";

const Page = () => {
  const screen = useSelector((state) => state.screen.value);

  switch (screen) {
    case Screens.UPLOAD:
    default:
      return <UploadScreen></UploadScreen>;
  }
};

export default Page;
