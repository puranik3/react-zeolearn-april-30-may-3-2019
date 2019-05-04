import React from 'react';
import Panel from './03-Panel';
import { mount } from 'enzyme';


describe( 'Panel', () => {
    it( 'passes heading prop downstream to PanelHeading', () => {
        const heading = 'About React';

        // @todo Mount the Panel
        const wrappedPanel = mount(
            <Panel heading={heading}>
                <p>It is a front-end library</p>
                <p>It is maintained by Facebook</p>
            </Panel>
        );

        // @todo Get hold of PanelHeading element and check its heading prop is set correctly
        expect( wrappedPanel.find( 'PanelHeading' ).props().heading ).toBe( heading );
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

        // @todo Get hold of PanelBody and make sure it has the children passed on to it from Panel (has 2 descendants with class child)
        expect( wrapper.find( 'PanelBody .child' ).length ).toBe( 2 );
    });

    it( 'hides panel body when panel heading is clicked', () => {
        const heading = 'About React';

        const wrapper = mount( 
            <Panel heading={heading}>
                <p>It is a front-end library</p>
                <p>It is maintained by Facebook</p>
            </Panel>
        );

        // @todo Find the .panel-body element - there should be one
        expect( wrapper.find( '.panel-body' ).length ).toBe( 1 );


        // @todo Find the .panel-heading element and simulate click on it (make sure to have a mock event object passed as seocnd argument to simulate())
        wrapper.find( '.panel-heading' ).simulate( 'click' );
        
        // @todo Verify that the .panel-body element is no more there
        expect( wrapper.find( '.panel-body' ).length ).toBe( 0 );
    });
});