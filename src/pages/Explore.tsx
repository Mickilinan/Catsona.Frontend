// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// export default function Explore() {
//   const [items, setItems] = useState<CatPersona[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     getCatPersonas()
//       .then(setItems)
//       .catch((e) => setError(String(e)))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <div className="min-h-screen grid place-items-center">Loading…</div>;
//   if (error) return <div className="min-h-screen grid place-items-center text-red-600">{error}</div>;

//   return (
//     <section className="min-h-screen px-6 py-10">
//       <h1 className="text-4xl font-bold mb-8 text-center">Explore Catsonas</h1>

//       <div className="grid gap-6 md:grid-cols-2">
//         {items.map((p) => (
//           <Card key={p.id} className="p-6 hover:shadow-lg transition-shadow">
//             <h2 className="text-2xl font-semibold">{p.name}</h2>
//             <p className="opacity-80 mt-2">{p.description}</p>

//             <ul className="list-disc pl-6 mt-4 opacity-80">
//               {p.typicalBehaviours.slice(0, 3).map((b, i) => (
//                 <li key={i}>{b}</li>
//               ))}
//             </ul>

//             <blockquote className="mt-4 border-l-4 pl-4 italic">
//               “{p.exampleQuote}”
//             </blockquote>

//             <div className="mt-6 flex gap-3">
//               <Link to="/quiz">
//                 <Button>Take the Quiz</Button>
//               </Link>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }
