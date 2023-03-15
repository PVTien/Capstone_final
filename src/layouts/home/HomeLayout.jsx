import React from "react";
import { Outlet } from "react-router-dom";
import MenuJira from "../../components/menu/MenuJira";
import SearchModalJira from "../../components/search-modal/SearchModalJira";
import SidebarJira from "../../components/sidebar/SidebarJira";

export default function HomeLayout() {
  return (
    <div className="jira">
      <SidebarJira />
      <MenuJira />
      <Outlet />
      <SearchModalJira/>
    </div>
  );
}
