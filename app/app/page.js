const API_URL =
  "https://xmiowseq9n166m8owm9vqea3.187.126.126.181.sslip.io/api/students";

async function getStudents() {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("API se data nahi aaya");
  return res.json();
}

export default async function Home() {
  const students = await getStudents();

  return (
    <main style={{ maxWidth: 600, margin: "40px auto", padding: 16 }}>
      <h1 style={{ textAlign: "center" }}>🎓 Students List</h1>
      <p style={{ textAlign: "center", color: "#666" }}>
        Data aa raha hai mere VPS API se 🚀
      </p>

      {students.map((s) => (
        <div
          key={s.id}
          style={{
            background: "white",
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ margin: 0 }}>{s.name}</h3>
          <p style={{ margin: "6px 0 0", color: "#555" }}>📚 {s.course}</p>
        </div>
      ))}
    </main>
  );
}
