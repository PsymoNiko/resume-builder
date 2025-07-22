export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#4A90E2] rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 text-center">Loading resume data...</p>
      </div>
    </div>
  )
}
