// Components
import Logo from "@/components/logo"
// Config
import { MY_LINKS } from "@/config"

export default function Footer() {
  return (
    <footer className="p-4 border-t border-t-1 flex justify-between">
      <Logo noText />
      <div>
        <p>
          Hecho con ❤️ por <a href={MY_LINKS.github} target="_blank" rel="noopener noreferrer" className="hightlight-text text-sm">Emanuelosva</a>
        </p>
      </div>
    </footer>
  )
}
