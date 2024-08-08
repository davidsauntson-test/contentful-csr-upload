import React from "react";
import { useSelector } from "react-redux";
import { Workbench } from "@contentful/f36-workbench";
import UploadScreen from "../components/screens/upload-screen";
import * as Screens from "../constants/screens";

const Page = () => {
  const screen = useSelector((state) => state.screen.value);

  const renderScreen = () => {
    switch (screen) {
      case Screens.UPLOAD:
      default:
        return <UploadScreen></UploadScreen>;
    }
  };

  return (
    <Workbench>
      <Workbench.Header title="Energy CSR Upload Tool"></Workbench.Header>
      <Workbench.Content>{renderScreen()}</Workbench.Content>
      <Workbench.Sidebar></Workbench.Sidebar>
    </Workbench>
  );
};

export default Page;
