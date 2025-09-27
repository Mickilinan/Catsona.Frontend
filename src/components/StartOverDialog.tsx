import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useQuiz } from "@/hooks/useQuiz";

interface StartOverDialogProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export default function StartOverDialog({
  children,
  onConfirm,
}: StartOverDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
  const { handleStartOver } = useQuiz();

  const handleConfirm = () => {
    handleStartOver();
    onConfirm?.();
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-eggshell border-burnt-sienna/20">
        <DialogHeader>
          <DialogTitle className="text-delft-blue text-xl font-bold">Start Over?</DialogTitle>
        </DialogHeader>
        <p className="text-delft-blue/70 mb-6">
          Are you sure you want to start over? This will clear your current
          progress.
        </p>
        <div className="flex gap-3 justify-end">
        <Button onClick={handleConfirm} className="btn-secondary">Yes, Start Over</Button>
          <Button onClick={handleCancel} variant="destructive" className="btn-primary">
            Cancel</Button>
         
        </div>
      </DialogContent>
    </Dialog>
  );
}
