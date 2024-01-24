"use server"

import { KNOWN_FAKE_DOMAINS } from "./fake-domains"
// Types
import { URLValidation } from "@/lib/types"

const VALID_GOB_HOSTS = [
  ".gob.mx",
]

const ERRORS = {
  insecure: {
    title: "Este sitio no es seguro, no cuenta con certificado SSL",
    description: 'Recuerda que todo sitio seguro comienza con "https://". Aquellos que solo cuentan con http:// envía toda tu información sin encriptar, lo que significa que cualquiera puede verla. Además toda página oficial debe de ser segura',
  },
  fake: {
    title: "Este sitio es falso",
    description: "Este link se encuentra dentro de la lista de sitios falsos reportados por el Gobierno de México",
  },
}

const WARNINGS = {
  host: {
    title: "Parece que no es un sitio oficial del gobierno",
    description: `La mayoría de los sitios del gobierno terminan en ${VALID_GOB_HOSTS.join(", ")}. Si no estás seguro de que este sitio sea oficial, no ingreses información personal ni hagas algún pago`,
  },
  doesNotExist: {
    title: "Este sitio no existe",
    description: "Aunque este sition tiene la extensión oficial del gobierno, parece que no existe y es inaccesible",
  },
  unknown: {
    title: "No pudimos verificar la seguridad de este sitio",
    description: "Aunque este sitio cuenta con las reglas de seguridad básicas y no se encuentra dentro de la lista de webs falsas listadas por el gobierno de México, no pudimos validar si este sitio es legítimo. Si no estás seguro de que este sitio sea oficial, no ingreses información personal",
  },
}

const SUCCESS = {
  title: "Este sitio es seguro",
  description: "Se pudo verificar que es un sitio oficial del gobierno de México",
}

export async function validateUrl(urlString: string): Promise<URLValidation> {
  try {
    const url = new URL(urlString)

    if (isThrustworthyDomain(url)) {
      if (!(await validateThrustworthyDomain(url))) {
        return { status: "warning", message: WARNINGS.doesNotExist }
      }
      return { status: "valid", message: SUCCESS }
    }

    if (url.protocol !== "https:") {
      return { status: "danger", message: ERRORS.insecure }
    }

    if (isFakeDomain(url)) {
      return { status: "danger", message: ERRORS.fake }
    }

    if (!isValidHost(url)) {
      return { status: "warning", message: WARNINGS.host }
    }

    return { status: "warning", message: WARNINGS.unknown }
  } catch (error) {
    return { status: "danger", message: ERRORS.insecure }
  }
}

function isThrustworthyDomain(url: URL) {
  return isValidHost(url) && url.protocol === "https:"
}

async function validateThrustworthyDomain(url: URL) {
  try {
    const response = await fetch(url.origin)
    return response.ok
  } catch (error) {
    return false
  }
}

function isValidHost(url: URL) {
  return VALID_GOB_HOSTS.some((validHost) => url.host.endsWith(validHost))
}

function isFakeDomain(url: URL) {
  return KNOWN_FAKE_DOMAINS.includes(url.origin)
}
