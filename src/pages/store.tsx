import { createContext, useContext, useEffect, useState } from "react";

const KEY = "medicare_enquiries_v1";
const now = () => new Date().toISOString();
const days = (n) => new Date(Date.now() - n * 864e5).toISOString();

const seed = [
  { id: "ENQ-1003", name: "Sneha Iyer", mobile: "9845012345", email: "sneha@example.com", department: "Gynaecology", message: "I would like to book a prenatal check-up for next week.", status: "New", assignedTo: "", createdAt: days(0), history: [{ at: days(0), type: "created", text: "Enquiry received" }] },
  { id: "ENQ-1002", name: "Arjun Patel", mobile: "9900123456", email: "arjun@example.com", department: "Orthopaedics", message: "Knee pain for two months. What are the consultation timings?", status: "In Progress", assignedTo: "Asha (Front desk)", createdAt: days(1), history: [{ at: days(1), type: "created", text: "Enquiry received" }, { at: days(1), type: "assigned", text: "Assigned to Asha (Front desk)" }] },
  { id: "ENQ-1001", name: "Fatima Khan", mobile: "9731001122", email: "fatima@example.com", department: "Paediatrics", message: "Need the vaccination schedule for a 6-month-old.", status: "Resolved", assignedTo: "Meena (Patient care)", createdAt: days(3), history: [{ at: days(3), type: "created", text: "Enquiry received" }, { at: days(2), type: "response", text: "Sent vaccination schedule by email." }, { at: days(2), type: "status", text: "Status changed to Resolved" }] },
];

const Ctx = createContext(null);
export const useEnquiries = () => useContext(Ctx);

export function EnquiryProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || seed; } catch { return seed; }
  });
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* storage unavailable */ }
  }, [items]);

  const update = (id, patch, entry) =>
    setItems((list) => list.map((e) => e.id === id ? { ...e, ...patch, history: entry ? [...e.history, { at: now(), ...entry }] : e.history } : e));

  const api = {
    items,
    add(data) {
      const id = `ENQ-${1000 + items.length + 1}`;
      setItems((l) => [{ id, ...data, status: "New", assignedTo: "", createdAt: now(), history: [{ at: now(), type: "created", text: "Enquiry received" }] }, ...l]);
      return id;
    },
    setStatus: (id, status) => update(id, { status }, { type: "status", text: `Status changed to ${status}` }),
    assign: (id, who) => update(id, { assignedTo: who, ...(who ? {} : {}) }, { type: "assigned", text: who ? `Assigned to ${who}` : "Unassigned" }),
    respond: (id, text) => update(id, {}, { type: "response", text }),
    reset: () => setItems(seed),
  };
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}
