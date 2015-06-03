import './layout.less';
import React from 'react';
import { RouteHandler } from 'react-router';
import { RouteStore } from 'router';
import ContentArea from 'modules/layout/components/content-area/content-area';
import SidebarArea from 'modules/layout/components/sidebar-area/sidebar-area';
import LayoutNavigation from 'modules/layout/components/layout-navigation/layout-navigation';

class LayoutHandler extends React.Component {

    render() {

        if (RouteStore.isCurrentPath('/login')) {

            return (
                <div className='layout-handler layout-handler--grey'>
                    <RouteHandler />
                </div>
            );

        }

        return (
            <div className='layout-handler'>
                <div className='layout-handler__nav'>
                    <SidebarArea />
                </div>
                <div className='layout-handler__content'>
                    <ContentArea>
                        <LayoutNavigation />
                        <RouteHandler />
                    </ContentArea>
                </div>
            </div>
        );

    }

}

export default LayoutHandler;
