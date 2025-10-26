import { Link } from 'react-router-dom';
import doctorA from '../assets/doctor-a.png';
import doctorO from '../assets/doctor-o.png';
import doctorR from '../assets/doctor-r.png';

function OurTeam() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-primary font-bold mb-4">Our Team</h1>
          <p className="text-lg font-secondary">
            Meet our dedicated veterinary professionals
          </p>
        </div>
      </section>

      {/* Veterinarians - One Board */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-primary font-bold text-center mb-12">Our Veterinarians</h2>
          
          {/* Single Board Container */}
          <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Doctor A */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 bg-white">
                  <img 
                    src={doctorA} 
                    alt="Dr. A." 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-primary font-semibold mb-2">Dr. A.</h3>
                <p className="text-gray-600 font-secondary mb-4">Lead Veterinarian</p>
                <Link 
                  to="/team/doctor-a" 
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-secondary font-semibold hover:bg-primary-dark transition"
                >
                  View Profile
                </Link>
              </div>

              {/* Doctor R */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 bg-white">
                  <img 
                    src={doctorR} 
                    alt="Dr. R." 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-primary font-semibold mb-2">Dr. R.</h3>
                <p className="text-gray-600 font-secondary mb-4">Veterinarian</p>
                <Link 
                  to="/team/doctor-r" 
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-secondary font-semibold hover:bg-primary-dark transition"
                >
                  View Profile
                </Link>
              </div>

              {/* Doctor O */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 bg-white">
                  <img 
                    src={doctorO} 
                    alt="Dr. O." 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-primary font-semibold mb-2">Dr. O.</h3>
                <p className="text-gray-600 font-secondary mb-4">Veterinarian</p>
                <Link 
                  to="/team/doctor-o" 
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-secondary font-semibold hover:bg-primary-dark transition"
                >
                  View Profile
                </Link>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurTeam;