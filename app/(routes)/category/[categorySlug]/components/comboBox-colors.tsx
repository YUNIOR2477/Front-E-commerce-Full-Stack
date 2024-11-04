"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboBoxColorsProps {
  images: {
    id: number;
    caption: string;
  }[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ComboBoxColors = (props: { images: any; value: any; setValue: any }) => {
  const [open, setOpen] = React.useState(false);
  const { value, setValue } = props;
  const { images }: ComboBoxColorsProps = props;
  console.log(value);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          name="color"
          role="combobox"
          aria-expanded={open}
          className="w-[110px] justify-between bg-black dark:bg-slate-300 text-white dark:text-black "
        >
          {value
            ? images.find((image) => image.caption === value)?.caption
            : "Colores:"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandInput placeholder="Buscar color..." />
          <CommandList>
            <CommandEmpty>Color no encontrado</CommandEmpty>
            <CommandGroup>
              {images.map((image) => (
                <CommandItem
                  key={image.id}
                  value={image.caption}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === image.caption ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {image.caption}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default ComboBoxColors;
