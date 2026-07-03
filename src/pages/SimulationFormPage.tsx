import { SimulationHero } from "../components/features/Simulation/Hero";
import { SimulationForm } from "../components/features/Simulation/Form";

export function SimulationFormsPage() {
  return (
    <div className="p-6 sm:p-10">
      <SimulationHero />
      <SimulationForm />
    </div>
  );
}
