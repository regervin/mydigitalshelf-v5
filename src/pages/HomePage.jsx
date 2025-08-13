import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Users, 
  Truck, 
  Shield, 
  BarChart3, 
  Globe,
  UserPlus,
  Upload,
  Share2,
  DollarSign
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Digital Products',
      description: 'Sell e-books, courses, software, templates, and any other digital products with secure delivery.'
    },
    {
      icon: Users,
      title: 'Membership Sites',
      description: 'Create and manage membership sites with recurring payments and protected content access.'
    },
    {
      icon: Truck,
      title: 'Automated Delivery',
      description: 'Automatically deliver products to customers after purchase with secure download links.'
    },
    {
      icon: Shield,
      title: 'License Protection',
      description: 'Protect your digital products with license keys and download limits to prevent unauthorized sharing.'
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Track your sales, revenue, and customer behavior with detailed analytics and reports.'
    },
    {
      icon: Globe,
      title: 'Global Payments',
      description: 'Accept payments from customers worldwide with multiple payment gateway integrations.'
    }
  ]

  const steps = [
    {
      number: '1',
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up and set up your seller profile'
    },
    {
      number: '2',
      icon: Upload,
      title: 'Upload Products',
      description: 'Add your digital products and set prices'
    },
    {
      number: '3',
      icon: Share2,
      title: 'Share Your Store',
      description: 'Promote your products with a custom storefront'
    },
    {
      number: '4',
      icon: DollarSign,
      title: 'Get Paid',
      description: 'Receive payments directly to your account'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-primary mb-6">
          MyDigitalShelf
        </h1>
        <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
          Create, sell, and deliver digital products with ease. Manage your digital inventory, process payments, and automate delivery all in one place.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/signup" className="btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary">
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-light dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card p-6">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Our platform makes selling digital products simple and straightforward.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <Icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start selling?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of creators who are successfully selling digital products online.
        </p>
        <Link to="/signup" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Create Your Account
        </Link>
      </div>
    </div>
  )
}

export default HomePage
