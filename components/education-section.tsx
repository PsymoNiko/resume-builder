export default function EducationSection() {
  return (
    <section id="education" className="text-center mb-24">
      <h3 className="text-3xl font-bold mb-8">Education & Languages</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold mb-4">Education</h4>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-medium">M.Sc. in Computer Engineering</p>
              <p className="text-gray-600">Amirkabir University of Technology</p>
              <p className="text-gray-500 text-sm">2018 – 2021</p>
            </div>
            <div>
              <p className="text-lg font-medium">B.Sc. in Computer Engineering</p>
              <p className="text-gray-600">Shahid Beheshti University</p>
              <p className="text-gray-500 text-sm">2014 – 2018</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold mb-4">Languages</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Persian</span>
              <span className="text-gray-500">(Native)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">English</span>
              <span className="text-gray-500">(Professional Working Proficiency)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
