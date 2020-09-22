import React from 'react'

export default function SidebarItem({test}) {
    return (
        <div>
            <button className={`sidebar-item ${test}`}>Sidebar Item</button>
        </div>
    )
}
