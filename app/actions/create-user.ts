"use server";
import bcrypjs from "bcryptjs";

import { prisma } from "@/lib/prisma";

import { FormSchema } from "../_components/Form-Component/formComponent";
export const createUser = async (data: FormSchema) => {
  //criptografar senha
  const hashedPassword = await bcrypjs.hash(data.password, 8);
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });
  return user;
};
