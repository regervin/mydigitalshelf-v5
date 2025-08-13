import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Plus, 
  Package, 
  Users, 
  Crown, 
  DollarSign,
  TrendingUp,
  Calendar,
  BarChart3,
  UserPlus,
  BookOpen,
  Target
} from 'lucide-react'

const Dashboard = () => {
  const stats = [
    { label: 'Total Products', value: '0', icon: Package },
    { label: 'Total Customers', value: '0', icon: Users },
    { label: 'Active Memberships', value: '0', icon: Crown },
    { label: 'Total Revenue', value: '$0.00', icon: DollarSign }
  ]

  const revenueStats = [
    { label: 'Today', value: '$0.00' },
    { label: 'This Week', value: '$0.00' },
    { label: 'This Month', value: '$0.00' }
  ]

  const quickActions = [
    { label: 'Add New Product', icon: Plus, link: '/products/add' },
    { label: 'Create Membership', icon: Crown, link: '/memberships/create' },
    { label: 'Manage Customers', icon: Users, link: '/customers' },
    { label: 'View Analytics', icon: BarChart3, link: '/analytics' }
  ]

  const tips = [
    { title: 'How to create your first digital product', icon: BookOpen },
    { title: 'Growing your customer base', icon: UserPlus },
    { title: 'Setting up recurring memberships', icon: Target }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="flex gap-3">
          <Link to="/products/add" className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Link>
          <Link to="/memberships/create" className="btn-secondary flex items-center gap-2">
            <Crown className="w-4 h-4" />
            Create Membership
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Revenue Stats */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Revenue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Sales */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Recent Sales
          </h2>
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No sales yet
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Link
                  key={index}
                  to={action.link}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-gray-900 dark:text-white">{action.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tips & Resources */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tips & Resources</h2>
        <div className="space-y-3">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <Icon className="w-5 h-5 text-secondary" />
                <span className="text-gray-900 dark:text-white">{tip.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
