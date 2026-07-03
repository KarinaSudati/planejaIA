interface StepProgressProps {
  currentStep: number;
  totalStep: number;
}

export function StepProgress({ currentStep, totalStep }: StepProgressProps) {
  const progressPercentage = (currentStep / totalStep) * 100;

  return (
    <div className="mb-4">
      <p className="text-muted-foreground mb-2">
        Passo {currentStep} de {totalStep}
      </p>
      <div className="bg-border h-1 w-full overflow-hidden rounded-full">
        <div
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalStep}
          aria-label={`Progresso: Passo ${currentStep} de ${totalStep}`}
          className="bg-primary h-1"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
