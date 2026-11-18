
import { Link } from "react-router-dom";
import { HOSPITAL, highlights, departments } from "./data.js";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-mint">
        <div className="container py-5">
          <div className="row align-items-center g-5 py-md-4">

            {/* Hero Content */}
            <div className="col-12 col-md-6 text-center text-md-start">

              <h1 className="hero-title fw-semibold">
                Welcome to Medicare Hospital. Care that listens first.
              </h1>

              <p className="hero-description mx-auto mx-md-0 mt-4">
                Specialist doctors, modern facilities and a team that treats
                every patient like family, from your first check-up to your
                full recovery.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-4">

                <Link to="/enquiry" className="btn-primary-custom">
                  Book appointment
                </Link>

                <Link to="/about" className="btn-ghost-custom">
                  Meet our doctors
                </Link>

              </div>
            </div>

            {/* Hero Right Card */}
            <div className="col-12 col-md-6">

              <div className="hero-card mx-auto">

                <div className="hero-card-inner">

                  <p className="hero-plus">+</p>

                  <div>
                    <p className="hero-card-title">
                      Open every day
                    </p>

                    <p className="hero-card-description">
                      OPD 8:00 am to 8:00 pm
                      <br />
                      Emergency 24×7
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
