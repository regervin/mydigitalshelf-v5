import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings,
  HardDrive,
  Crown
} from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/products', icon: Package, label: 'Products' },
    { path: '/memberships', icon: Crown, label: 'Memberships' },
    { path: '/customers', icon: Users, label: 'Customers' },
    { path: '/sales', icon: CreditCard, label: 'Sales' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <Link to="/" className="text-2xl font-bold text-primary">
          MyDigitalShelf
        </Link>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                isActive ? 'bg-primary/10 text-primary border-r-2 border-primary' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <HardDrive className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Storage</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500">
            0% of 10 GB used
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500">
            0 Bytes used
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
