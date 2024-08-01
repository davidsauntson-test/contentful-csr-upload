import React from "react";
import {Button, ButtonGroup} from "@contentful/f36-components";
import {Workbench} from '@contentful/f36-workbench';

import {useSelector, useDispatch} from 'react-redux'
import {setScreen} from '../redux/screenSlice'
import Screen1 from "../screens/screen-1";
import Screen0 from "../screens/screen-0";
import Sidebar0 from "../sidebars/sidebar-0";
import Sidebar1 from "../sidebars/sidebar-1";
import Screen2 from "../screens/screen-2";
import Sidebar2 from "../sidebars/sidebar-2";
import Screen3 from "../screens/screen-3";
import Sidebar3 from "../sidebars/sidebar-3";


const Page = () => {

    const screen = useSelector((state) => state.screen.value)
    const dispatch = useDispatch();


    const renderScreen = () => {
        switch (screen) {
            case 0:
                return <Screen0></Screen0>;
            case 1:
                return <Screen1></Screen1>;
            case 2:
                return <Screen2></Screen2>;
            case 3:
                return <Screen3></Screen3>;
            default:
                return <></>;
        }
    }

    const renderSidebar = () => {
        switch (screen) {
            case 0:
                return <Sidebar0></Sidebar0>;
            case 1:
                return <Sidebar1></Sidebar1>;
            case 2:
                return <Sidebar2></Sidebar2>;
            case 3:
                return <Sidebar3></Sidebar3>;
            default:
                return <></>;
        }
    }

    const renderButtons = () => {
        let buttons = [];
        for (let i = 0; i < 4; i++) {
            buttons.push(
                <Button marginRight="spacingM" size="small" onClick={() => {
                    dispatch(setScreen(i))
                }}>
                    {i}
                </Button>
            )
        }
        return buttons;
    }

    return (
        <Workbench>
            <Workbench.Header title="Energy CSR Upload Tool"
                              actions={
                                  <ButtonGroup variant="spaced" spacing="spacingM">
                                      {renderButtons()}
                                  </ButtonGroup>
                              }>
            </Workbench.Header>
            <Workbench.Content>
                {renderScreen()}
            </Workbench.Content>
            <Workbench.Sidebar>
                {renderSidebar()}
            </Workbench.Sidebar>
        </Workbench>
    );
};

export default Page;
