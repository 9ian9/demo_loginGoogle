"use client";

import { useState } from "react";
import DetailInformation from "./DetailInformation";
import ApplyForm from "./ApplyForm.js";
import Candidates from "./Candidates";
import Interview from "./Interview";
import Completed from "./Completed";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(1);

  const renderTabContent = () => {
    switch (selectedTab) {
      case 1:
        return <DetailInformation />;
      case 2:
        return <ApplyForm />;
      case 3:
        return <Candidates />;
      case 4:
        return <Interview />;
      case 5:
        return <Completed />;
      default:
        return <DetailInformation />;
    }
  };

  return (
    <div className="tabs tabs-border">
      {/* Tab 1 */}
      <input
        type="radio"
        name="my_tabs"
        className="tab"
        aria-label="Detail Information"
        checked={selectedTab === 1}
        onChange={() => setSelectedTab(1)}
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        {selectedTab === 1 && <DetailInformation />}{" "}
        {/* Điều kiện hiển thị nội dung Tab 1 */}
      </div>

      {/* Tab 2 */}
      <input
        type="radio"
        name="my_tabs"
        className="tab"
        aria-label="Apply form"
        checked={selectedTab === 2}
        onChange={() => setSelectedTab(2)}
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        {selectedTab === 2 && <ApplyForm />}{" "}
        {/* Điều kiện hiển thị nội dung Tab 2 */}
      </div>

      {/* Tab 3 */}
      <input
        type="radio"
        name="my_tabs"
        className="tab"
        aria-label="Candidates"
        checked={selectedTab === 3}
        onChange={() => setSelectedTab(3)}
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        {selectedTab === 3 && <Candidates />}{" "}
        {/* Điều kiện hiển thị nội dung Tab 3 */}
      </div>

      {/* Tab 4 */}
      <input
        type="radio"
        name="my_tabs"
        className="tab"
        aria-label="Interview"
        checked={selectedTab === 4}
        onChange={() => setSelectedTab(4)}
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        {selectedTab === 4 && <Interview />}{" "}
        {/* Điều kiện hiển thị nội dung Tab 4 */}
      </div>

      {/* Tab 5 */}
      <input
        type="radio"
        name="my_tabs"
        className="tab"
        aria-label="Completed"
        checked={selectedTab === 5}
        onChange={() => setSelectedTab(5)}
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        {selectedTab === 5 && <Completed />}{" "}
        {/* Điều kiện hiển thị nội dung Tab 5 */}
      </div>
    </div>
  );
}

export default Tabs;
