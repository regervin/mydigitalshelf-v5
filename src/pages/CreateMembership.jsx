import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save, Crown } from 'lucide-react'

const CreateMembership = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    billingCycle: 'monthly',
    trialDays: '',
    maxMembers: '',
    status: 'draft',
    features: ['']
  })
  const [saving, setSaving] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    setFormData({
      ...formData,
      features: newFeatures
    })
  }

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    })
  }

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index)
    setFormData({
      ...formData,
      features: newFeatures
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    
    // Simulate saving
    setTimeout(() => {
      setSaving(false)
      navigate('/memberships')
    }, 1500)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/memberships')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Membership</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Basic Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="label">Membership Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter membership name"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="label">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="input"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your membership benefits"
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Pricing & Billing
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="label">Price ($)</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      step="0.01"
                      min="0"
                      required
                      className="input"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label htmlFor="billingCycle" className="label">Billing Cycle</label>
                    <select
                      id="billingCycle"
                      name="billingCycle"
                      className="input"
                      value={formData.billingCycle}
                      onChange={handleChange}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="trialDays" className="label">Free Trial Days</label>
                  <input
                    type="number"
                    id="trialDays"
                    name="trialDays"
                    min="0"
                    className="input"
                    value={formData.trialDays}
                    onChange={handleChange}
                    placeholder="0 (no trial)"
                  />
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Membership Features
              </h2>
              <div className="space-y-3">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      className="input flex-1"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      placeholder="Enter a membership feature"
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="text-primary hover:underline"
                >
                  + Add Feature
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publishing */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Publishing
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="status" className="label">Status</label>
                  <select
                    id="status"
                    name="status"
                    className="input"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Limits */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Membership Limits
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="maxMembers" className="label">Max Members</label>
                  <input
                    type="number"
                    id="maxMembers"
                    name="maxMembers"
                    min="1"
                    className="input"
                    value={formData.maxMembers}
                    onChange={handleChange}
                    placeholder="Leave empty for unlimited"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="card p-6">
              <button
                type="submit"
                disabled={saving}
                className={`w-full btn-primary flex items-center justify-center gap-2 ${
                  saving ? 'save-animation' : ''
                }`}
              >
                <Crown className="w-4 h-4" />
                {saving ? 'Creating...' : 'Create Membership'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateMembership
