"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveToLocalStorage = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      if (password.length >= 7) {
        try {
          const response = await axios.post(
            "http://localhost:1337/api/auth/local",
            {
              identifier: email,
              password,
            }
          );
          if (response.data.jwt) {
            setEmail("");
            setPassword("");
            const user = {
              username: response.data.user.username,
              jwt: response.data.jwt,
            };
            saveToLocalStorage("user", user);
            router.back();
            setTimeout(() => {
              router.refresh();
            }, 100);
          }
          toast({
            title: `✅ Inicio de sesion exitoso, Bienvenido: ${response.data.user.username}`,
            variant: "default",
          });
        } catch (error) {
          toast({
            title: `${error}`,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "🚫 La contraseña debe tener mínimo 7 caracteres",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "🚫Debes llenar todos los campos correctamente",
        variant: "destructive",
      });
    }
  };
  return (
    <Card className="max-w-xl mx-auto md:mt-14 mb-6 mt-4 p-5 shadow-lg md:mb-16 ">
      <h2 className="text-2xl font-bold mb-5">Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Correo:
          </label>
          <Input
            type="email"
            id="username"
            name="email"
            placeholder="Ingresa tu correo"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña:
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <Button
            type="submit"
            className=" w-full text-white dark:text-black font-bold py-2 px-4 rounded mb-3"
          >
            Iniciar Sesión
          </Button>
          <p>
            Aun no tienes una cuenta?
            <span
              className="font-bold hover:text-green-600 cursor-pointer ml-1"
              onClick={() => router.push("/register")}
            >
              Registrarse
            </span>
          </p>
        </div>
      </form>
    </Card>
  );
}
