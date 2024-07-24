import React from "react";
import {Button, ButtonGroup} from "@contentful/f36-components";
import {Workbench} from '@contentful/f36-workbench';

import {useSelector, useDispatch} from 'react-redux'
import {setScreen} from '../redux/screenSlice'
import Screen1 from "../screens/screen-1";
import Screen0 from "../screens/screen-0";
import Sidebar0 from "../sidebars/sidebar-0";


const Page = () => {

    const screen = useSelector((state) => state.screen.value)
    const dispatch = useDispatch();


    const renderScreen = () => {
        switch (screen) {
            default:
            case 0:
                return (<Screen0></Screen0>)
            case 1:
                return (<Screen1></Screen1>)
        }
    }

    const renderSidebar = () => {
        switch (screen) {
            default:
            case 0:
                return (<Sidebar0></Sidebar0>)
        }
    }

    return (
        <Workbench>
            <Workbench.Header title="Energy CSR Upload Tool"
                              actions={
                                  <ButtonGroup variant="spaced" spacing="spacingM">
                                      <Button size="small" onClick={() => {
                                          dispatch(setScreen(1))
                                      }} marginRight="spacingM">
                                          1
                                      </Button>
                                      <Button size="small" onClick={() => {
                                          dispatch(setScreen(2))
                                      }}>
                                          2
                                      </Button>
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
