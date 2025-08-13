import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Upload, Save } from 'lucide-react'

const EditProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discount: '',
    category: '',
    tags: '',
    status: 'draft',
    downloadLimit: '',
    licenseType: 'single'
  })
  const [files, setFiles] = useState([])
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    // In a real app, you would fetch the product data here
    // For now, we'll just set some placeholder data
    setFormData({
      name: 'Sample Product',
      description: 'This is a sample product description',
      price: '29.99',
      discount: '10',
      category: 'ebook',
      tags: 'sample, product, test',
      status: 'active',
      downloadLimit: '5',
      licenseType: 'single'
    })
  }, [id])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    setFiles([...e.target.files])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    
    // Simulate saving
    setTimeout(() => {
      setSaving(false)
      navigate('/products')
    }, 1500)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/products')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Product</h1>
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
                  <label htmlFor="name" className="label">Product Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
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
                    placeholder="Describe your product"
                  />
                </div>
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
                    <label htmlFor="discount" className="label">Discount (%)</label>
                    <input
                      type="number"
                      id="discount"
                      name="discount"
                      min="0"
                      max="100"
                      className="input"
                      value={formData.discount}
                      onChange={handleChange}
                      placeholder="0"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="category" className="label">Category</label>
                  <select
                    id="category"
                    name="category"
                    className="input"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select a category</option>
                    <option value="ebook">E-book</option>
                    <option value="course">Course</option>
                    <option value="software">Software</option>
                    <option value="template">Template</option>
                    <option value="audio">Audio</option>
                    <option value="video">Video</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tags" className="label">Tags</label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    className="input"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Enter tags separated by commas"
                  />
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Product Files
              </h2>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Drag and drop your files here, or click to browse
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="btn-primary cursor-pointer inline-block"
                >
                  Choose Files
                </label>
              </div>
              {files.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Selected Files:
                  </h3>
                  <ul className="space-y-1">
                    {Array.from(files).map((file, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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

            {/* License Settings */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                License Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="licenseType" className="label">License Type</label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    className="input"
                    value={formData.licenseType}
                    onChange={handleChange}
                  >
                    <option value="single">Single Use</option>
                    <option value="multiple">Multiple Use</option>
                    <option value="unlimited">Unlimited</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="downloadLimit" className="label">Download Limit</label>
                  <input
                    type="number"
                    id="downloadLimit"
                    name="downloadLimit"
                    min="1"
                    className="input"
                    value={formData.downloadLimit}
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
                <Save className="w-4 h-4" />
                {saving ? 'Saving...' : 'Update Product'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProduct
