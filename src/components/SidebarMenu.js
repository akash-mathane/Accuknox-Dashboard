// src/components/SidebarMenu.js
import React from 'react';

function SidebarMenu({ onClose, onAddWidget }) {
  return (
    <div className="sidebar-menu">
      <div className="sidebar-content">
        {/* Menu items for adding widgets */}
        <button onClick={onAddWidget}>Add Widget</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SidebarMenu;
