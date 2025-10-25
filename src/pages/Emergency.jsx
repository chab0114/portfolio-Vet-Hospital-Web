function Emergency() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-danger text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-primary font-bold mb-4">⚠️ Emergency Care</h1>
          <p className="text-lg font-secondary">
            Quick access to emergency veterinary services
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-l-4 border-danger">
            <h2 className="text-2xl font-primary font-bold mb-4 text-danger">Important Notice</h2>
            <p className="text-gray-700 font-secondary text-lg leading-relaxed">
              Please call the clinic during regular hours for all emergencies. 
              Outside of our regular hours, please contact one of the emergency hospitals listed below.
            </p>
          </div>
        </div>
      </section>

      {/* Our Hours */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-primary font-bold mb-6 text-center">Our Regular Hours</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-secondary">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Thursday:</span>
                  <span>8:00am - 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Friday:</span>
                  <span>8:00am - 5:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday - Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold text-primary">📞 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After Hours Emergency Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-primary font-bold mb-8 text-center">After Hours Emergency Hospitals</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Primary Emergency Contact */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="text-2xl font-primary font-bold text-primary mb-2">Primary Emergency Contact</h3>
                  <p className="text-lg font-semibold text-gray-800">City Veterinary Emergency Hospital</p>
                </div>
              </div>
              
              <div className="space-y-3 font-secondary text-gray-700 ml-14">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Available:</span> 24 hours, 7 days a week
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold">📍 Address:</span>
                  <span>
                    123 Emergency Road, Unit 10<br />
                    City, Province, K2V 1A1
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📞 Phone:</span>
                  <a href="tel:555-111-2222" className="text-primary hover:underline">(555) 111-2222</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📧 Email:</span>
                  <a href="mailto:emergency@cityvet.com" className="text-primary hover:underline">emergency@cityvet.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">🌐 Website:</span>
                  <a href="#" className="text-primary hover:underline">www.cityvetemergency.com</a>
                </p>
              </div>
            </div>

            {/* Secondary Emergency Contact */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="text-2xl font-primary font-bold text-primary mb-2">Secondary Emergency Contact</h3>
                  <p className="text-lg font-semibold text-gray-800">Regional Animal Emergency Center</p>
                </div>
              </div>
              
              <div className="space-y-3 font-secondary text-gray-700 ml-14">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Available:</span> 24 hours, 7 days a week
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold">📍 Address:</span>
                  <span>
                    456 Pet Care Avenue<br />
                    City, Province, K1K 2B2
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📞 Phone:</span>
                  <a href="tel:555-333-4444" className="text-primary hover:underline">(555) 333-4444</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📧 Email:</span>
                  <a href="mailto:info@regionalemergency.com" className="text-primary hover:underline">info@regionalemergency.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">🌐 Website:</span>
                  <a href="#" className="text-primary hover:underline">www.regionalemergency.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Emergency Care */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-primary font-bold mb-8 text-center">When to Seek Emergency Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <span className="text-danger text-xl">⚠️</span>
                <p className="font-secondary text-gray-700">Difficulty breathing</p>
              </div>
              <div className="flex gap-3">
                <span className="text-danger text-xl">⚠️</span>
                <p className="font-secondary text-gray-700">Seizures or collapse</p>
              </div>
              <div className="flex gap-3">
                <span className="text-danger text-xl">⚠️</span>
                <p className="font-secondary text-gray-700">Severe bleeding</p>
              </div>
              <div className="flex gap-3">
                <span className="text-danger text-xl">⚠️</span>
                <p className="font-secondary text-gray-700">Unable to urinate</p>
              </div>
              <div className="flex gap-3">
                <span className="text-danger text-xl">⚠️</span>
                <p className="font-secondary text-gray-700">Suspected poisoning</p>
              </div>
              <div className="flex gap-3">
                <span className="text-danger text-xl">⚠️</span>
                <p className="font-secondary text-gray-700">Eye injuries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Emergency;