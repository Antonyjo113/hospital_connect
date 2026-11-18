import { Link } from "react-router-dom";
import { departments, doctors, facilities } from "./data.js";

const initials = (n) => n.replace("Dr. ", "").split(" ").map((p) => p[0]).join("");

export default function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-5 py-14">
      <section className="grid gap-8 md:grid-cols-2">
        <h1 className="text-4xl font-semibold text-teal-deep md:text-5xl">A hospital built around patients, not paperwork.</h1>
        <p className="text-lg text-slate-700">
          Founded in 1999, Medicare Hospital has grown from a 30-bed clinic into a 400-bed multi-speciality centre.
          Our doctors work as one team so you get a clear diagnosis, a clear plan and clear costs.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-deep">Available departments</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <div key={d.name} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <span className="text-2xl">{d.icon}</span>
              <h3 className="mt-3 text-xl font-semibold">{d.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{d.text}</p>
              <Link to={`/enquiry?dept=${encodeURIComponent(d.name)}`} className="mt-4 inline-block text-sm font-semibold text-teal-mid hover:underline">Enquire about {d.name}</Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-deep">Doctors and specialists</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <div key={d.name} className="rounded-2xl bg-mint p-6">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-teal-deep font-display text-xl text-white">{initials(d.name)}</div>
              <h3 className="mt-4 text-lg font-semibold">{d.name}</h3>
              <p className="text-sm text-slate-700">{d.role}</p>
              <p className="mt-1 text-xs text-slate-500">{d.exp} of experience</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 ring-1 ring-slate-200 md:p-12">
        <h2 className="text-3xl font-semibold text-teal-deep">Facilities and infrastructure</h2>
        <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {facilities.map((f) => (
            <li key={f} className="flex items-start gap-3 border-b border-slate-100 pb-3">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-mid text-xs text-white">✓</span>{f}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
