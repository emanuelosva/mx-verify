"use client"

import { useState } from "react"
// Components
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  XOctagonIcon,
  AlertTriangleIcon,
  ShieldIcon
} from "lucide-react"
// Types
import { URLValidation } from "@/lib/types"

export type URLResultProps = {
  result: URLValidation
  setResult: (result: URLValidation|null) => void
}

export default function URLResult({ result, setResult }: URLResultProps) {
  const [open, setOpen] = useState(true)
  const isDesktop = window.matchMedia("(min-width: 768px)").matches

  function onOpenDialogChange(open: boolean) {
    setOpen(open)
    setResult(null)
  }

  function onCloseDrawer() {
    setResult(null)
  }

  if (isDesktop) {
    return (
      <Dialog defaultOpen={true} open={open} onOpenChange={onOpenDialogChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <ResultTitle status={result.status} />
            </DialogTitle>
          </DialogHeader>
          <Result result={result} />
          <DialogFooter>
            <Button variant="outline">Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onClose={onCloseDrawer}>
      <DrawerContent className="min-h-[400px]">
        <DrawerHeader className="text-left">
          <DrawerTitle>
            <ResultTitle status={result.status} />
          </DrawerTitle>
        </DrawerHeader>
        <Result result={result} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" onClick={onCloseDrawer}>Cerrar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ResultTitle({ status }: { status: URLValidation["status"] }) {
  const Icon = getIcon()

  function getTitle() {
    if (status === "valid") return "Sitio seguro"
    if (status === "warning") return "Podría no ser seguro"
    return "Sitio falso"
  }

  function getIcon() {
    if (status === "valid") return ShieldIcon
    if (status === "warning") return AlertTriangleIcon
    return XOctagonIcon
  }

  function getColor() {
    if (status === "valid") return "text-success"
    if (status === "warning") return "text-warning"
    return "text-danger"
  }

  return (
    <div className={"w-full flex gap-2 items-center"}>
      <Icon className={`h-8 w-8 ${getColor()}`} />
      <p className="text-2xl">{getTitle()}</p>
    </div>
  )
}

function Result({ result }: { result: URLValidation }) {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center py-4">
      <p className="text-3xl text-center">{result.message.title}</p>
      <p className="text-xl text-center">{result.message.description}</p>
    </div>
  )
}
