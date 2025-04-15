import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const DialogContentData = () => {
  return (
    <DialogContent className="bg-black sm:max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Faça o seu Post</DialogTitle>
        <DialogDescription>
          Esse post será exibido para outras pessoas que utilizarem a plataforma
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="tex-start flex flex-col gap-4">
          <Label htmlFor="name" className="text-right">
            Post
          </Label>
          <Textarea
            placeholder="Escreva sua mensagem."
            className="col-span-3 h-[150px]"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Postar</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogContentData;
