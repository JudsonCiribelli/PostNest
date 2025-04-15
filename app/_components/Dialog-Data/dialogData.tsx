import { useContext, useState } from "react";

import { createPost } from "@/app/actions/create-post";
import { AppContext } from "@/app/Context/appContext";

import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const DialogContentData = () => {
  const [userPosts, setUserPosts] = useState("");
  const [title, setTitle] = useState("");
  const { data } = useContext(AppContext);

  const handlePost = async () => {
    if (!data?.user?.id) {
      alert("ID do usuário não encontrado!");
      return;
    }
    await createPost({
      title: title,
      content: userPosts,
      userId: data?.user?.id,
    });
    try {
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <DialogContent className="bg-black sm:max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Faça o seu Post</DialogTitle>
        <DialogDescription>
          Esse post será exibido para outras pessoas que utilizarem a plataforma
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-4 text-start">
          <Label htmlFor="title" className="text-right">
            Título
          </Label>
          <Input
            id="title"
            value={title}
            className="col-span-3"
            placeholder="Digite o título do seu post"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="tex-start flex flex-col gap-4">
          <Label htmlFor="name" className="text-right">
            Post
          </Label>
          <Textarea
            value={userPosts}
            onChange={(e) => setUserPosts(e.target.value)}
            placeholder="Escreva sua mensagem."
            className="col-span-3 h-[150px]"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" onClick={handlePost}>
          Postar
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogContentData;
