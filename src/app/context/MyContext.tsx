'use client';

import React, { createContext, useContext, useState, ReactNode, RefObject, useRef } from 'react';

type MyContextValue = {
    goToProjectSection?: (value: RefObject<HTMLElement> | null) => void;
    aboutRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
    serviceRef: RefObject<HTMLDivElement>;
    homeRef: RefObject<HTMLDivElement>;
};

//create context
const MyContext = createContext<MyContextValue | undefined>(undefined);

export function MyProvider({ children }: { children: ReactNode }) {




    //ref create

    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const serviceRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);


    const goToProjectSection = (value: RefObject<HTMLDivElement> | null) => {

        if (value?.current) {
            value.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    const value: MyContextValue = {
        aboutRef,
        contactRef,
        serviceRef,
        homeRef,
        goToProjectSection
    };


    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
}

export function useMyContext() {

    const ctx = useContext(MyContext);
    if (ctx === undefined) {
        throw new Error('useMyContext must be used within MyProvider');
    }
    return ctx;
}
