"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email !== "" && password !== "" && user !== "") {
      if (user.length >= 6) {
        if (password.length >= 7) {
          try {
            const response = await axios.post(
              "http://localhost:1337/api/auth/local/register",
              { username: user, email, password }
            );
            if (response) {
              setEmail("");
              setPassword("");
              setUser("");
              router.push("/login");
              toast({
                title: `✅ Usuario "${response.data.user.username}" registrado correctamente`,
                variant: "default",
              });
            }
          } catch (error) {
            toast({ title: `🚫 ${error}`, variant: "destructive" });
          }
        } else {
          toast({
            title: "🚫 La contraseña debe tener mínimo 7 caracteres",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "🚫 El nombre de usuario debe tener mínimo 6 caracteres",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "🚫 Debes llenar todos los campos correctamente",
        variant: "destructive",
      });
    }
  };
  return (
    <Card className="max-w-xl mx-auto md:mt-8 mb-6 mt-4 p-5 shadow-lg md:mb-12">
      {" "}
      <h2 className="text-2xl font-bold mb-5">Registrarse</h2>{" "}
      <form onSubmit={handleRegister}>
        {" "}
        <div className="mb-4">
          {" "}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            {" "}
            Usuario{" "}
          </label>{" "}
          <Input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            id="username"
            placeholder="Ingresa tu usuario"
            className="w-full px-3 py-2 border rounded"
            required
          />{" "}
        </div>{" "}
        <div className="mb-4">
          {" "}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            {" "}
            Correo Electrónico{" "}
          </label>{" "}
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
            className="w-full px-3 py-2 border rounded"
            required
          />{" "}
        </div>{" "}
        <div className="mb-6">
          {" "}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            {" "}
            Contraseña{" "}
          </label>{" "}
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            className="w-full px-3 py-2 border rounded"
            required
          />{" "}
        </div>{" "}
        <div className="flex items-center justify-between">
          {" "}
          <Button
            type="submit"
            className="w-full dark:text-black text-white font-bold py-2 px-4 rounded"
          >
            {" "}
            Registrarse{" "}
          </Button>{" "}
        </div>{" "}
      </form>{" "}
    </Card>
  );
}
