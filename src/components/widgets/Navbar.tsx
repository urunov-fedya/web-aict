import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { SelectLanguage } from "../core/langSelect";

export const Navbar = () => {


    return (
        <div className="flex flex-wrap items-center justify-between pr-[80px] py-4 pl-[68px]">
            <Tabs classNames={{
                tabList: ["py-1", 'px-0'],
                tab: ["data-[key=main]:pr-0",]
            }} key='underlined' color="primary" variant='underlined' aria-label="Tabs variants">
                <Tab title="Главная" key="Main" ></Tab>
                <Tab title="Об агенстве" key="about" ></Tab>
                <Tab title="Деятельность" key="activity" ></Tab>
                <Tab title="Документы" key="Docs" ></Tab>
                <Tab title="Проекты" key="Projects" ></Tab>
                <Tab title="События" key="Events" ></Tab>
                <Tab title="Вакансии" key="Jobs" ></Tab>
                <Tab title="Контакты" key="Contacts" ></Tab>
            </Tabs>
            <SelectLanguage />
        </div>
    );
}
