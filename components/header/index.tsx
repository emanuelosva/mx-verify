import { MenuIcon } from "lucide-react"
// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function Header() {
  return (
    <header className="p-4 border-b border-b-1 flex justify-between">
      <div className="flex gap-2">
        <Logo />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Reportar enlace falso</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
