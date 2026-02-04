"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";
import { TabMyDetails } from "./TabMyDetails";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("0");
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem value="0" title="My Details" isSelected={currentTab === "0"} />
        <TabItem value="1" title="Profile" isSelected={currentTab === "1"} />
        <TabItem value="2" title="Password" isSelected={currentTab === "2"} />
        <TabItem value="3" title="Team" isSelected={currentTab === "3"} />
        <TabItem value="4" title="Plan" isSelected={currentTab === "4"} />
        <TabItem value="5" title="Billing" isSelected={currentTab === "5"} />
        <TabItem value="6" title="Email" isSelected={currentTab === "6"} />
        <TabItem
          value="7"
          title="Notifications"
          isSelected={currentTab === "7"}
        />
        <TabItem
          value="8"
          title="Integrations"
          isSelected={currentTab === "8"}
        />
        <TabItem value="9" title="API" isSelected={currentTab === "9"} />
      </Tabs.List>

      <Tabs.Content value="0">
        <TabMyDetails />
      </Tabs.Content>
    </Tabs.Root>
  );
}
