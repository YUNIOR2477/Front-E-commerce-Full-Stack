"use client"

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";

const LoginDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    console.log("Email:", email);
    console.log("Password:", password);
    setIsOpen(false);
  };
  return (
    <div>
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {" "}
      <DialogTrigger asChild>
        {" "}
        <Button onClick={() => setIsOpen(true)}>Iniciar Sesión</Button>{" "}
      </DialogTrigger>{" "}
      <DialogContent>
        {" "}
        <DialogHeader>
          {" "}
          <DialogTitle>Iniciar Sesión</DialogTitle>{" "}
          <DialogDescription>
            Introduce tus credenciales para iniciar sesión
          </DialogDescription>{" "}
        </DialogHeader>{" "}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <Button onClick={handleLogin}>Iniciar Sesión</Button>{" "}
        <Button onClick={() => setIsOpen(false)} variant="secondary">
          Cancelar
        </Button>{" "}
      </DialogContent>{" "}
    </Dialog>
    </div>
  );
};
export default LoginDialog;
