import React from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="ml-64">
        <TopNav />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
