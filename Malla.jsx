
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, CircleDot } from "lucide-react";

const materias = [
  {
    nombre: "Introducción a la Ciencia Política",
    semestre: "S1",
    estado: "aprobada",
  },
  {
    nombre: "Introducción a las Relaciones Internacionales",
    semestre: "S1",
    estado: "aprobada",
  },
  {
    nombre: "Pensamiento Filosófico Premoderno",
    semestre: "S1",
    estado: "aprobada",
  },
  {
    nombre: "Epistemología de las Ciencias Sociales",
    semestre: "S1",
    estado: "aprobada",
  },
  {
    nombre: "Sociología General",
    semestre: "S1",
    estado: "aprobada",
  },
];

const iconoEstado = {
  aprobada: <CheckCircle className="text-green-600" />,
  cursando: <Clock className="text-yellow-500" />,
  pendiente: <CircleDot className="text-gray-400" />,
};

const colorPorSemestre = {
  S1: "bg-blue-100",
  S2: "bg-green-100",
  S3: "bg-yellow-100",
  S4: "bg-pink-100",
  S5: "bg-purple-100",
  S6: "bg-orange-100",
};

export default function Malla() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Malla Interactiva - RRII</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {materias.map((materia, index) => (
          <Card
            key={index}
            className={`${colorPorSemestre[materia.semestre] || "bg-white"} rounded-2xl shadow p-4 flex items-center justify-between`}
          >
            <CardContent className="flex flex-col">
              <span className="font-semibold text-base">{materia.nombre}</span>
            </CardContent>
            <div className="pr-2">{iconoEstado[materia.estado]}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
