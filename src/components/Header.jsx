function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-logo text-primary">
            🐾 Vet Hospital
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-secondary">
            <li>
              <a href="#" className="text-secondary-dark hover:text-primary font-semibold transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-dark hover:text-primary font-semibold transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-dark hover:text-primary font-semibold transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-danger hover:text-danger font-bold transition">
                Emergency
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary-dark hover:text-primary font-semibold transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Book Appointment Button */}
        <button className="bg-primary text-white px-6 py-2 rounded-lg font-secondary font-semibold hover:bg-primary-dark transition">
          Book Appointment
        </button>
      </div>
    </header>
  );
}

export default Header;