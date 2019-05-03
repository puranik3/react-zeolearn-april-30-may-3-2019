import React from 'react';
import { mount } from 'enzyme';

import Panel from './03-Panel';

describe( 'Panel', () => {
    it( 'passes heading prop downstream to PanelHeading', () => {
        const heading = 'About React';

        const wrapper = mount( 
            <Panel heading={heading}>
                <p>It is a front-end library</p>
                <p>It is maintained by Facebook</p>
            </Panel>
        );

        expect( wrapper.props().heading ).toEqual( heading );

        const panelHeading = wrapper.find( 'PanelHeading' );
        expect( panelHeading.length ).toBe( 1 );
        expect( panelHeading.props().heading ).toBe( heading );
    });

    it( 'passes children downstream to PanelBody, and PanelBody renders them', () => {
        const heading = 'About React';
        const children = [
            <p className="child">It is a front-end library</p>,
            <p className="child">It is maintained by Facebook</p>
        ];

        const wrapper = mount( 
            <Panel heading={heading}>{children}</Panel>
        );

        const panelBody = wrapper.find( 'PanelBody' );
        expect( panelBody.props().children ).toEqual( children );
        expect( panelBody.find( '.child' ).length ).toBe( 2 );
    });

    it( 'hides panel body when panel heading is clicked', () => {
        const heading = 'About React';

        const wrapper = mount( 
            <Panel heading={heading}>
                <p>It is a front-end library</p>
                <p>It is maintained by Facebook</p>
            </Panel>
        );

        let panelBodyDiv, panelHeadingDiv;
        panelBodyDiv = wrapper.find( 'PanelBody > .panel-body' )
        expect( panelBodyDiv.length ).toBe( 1 );

        panelHeadingDiv = wrapper.find( 'PanelHeading' ).find( '.panel-heading' );
        panelHeadingDiv.simulate( 'click', { preventDefault: jest.fn() } /* event object may be passed here */ )
        
        panelBodyDiv = wrapper.find( 'PanelBody' ).find( '.panel-body' );
        expect( panelBodyDiv.length ).toBe( 0 );
    });
});