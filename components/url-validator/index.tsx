"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
// Components
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import URLResult from "@/components/url-validator/result"
// Server actions
import { validateUrl } from "@/lib/actions"
// Types
import { URLValidation } from "@/lib/types"

const formSchema = z.object({
  url: z.string().url("Por favor, introduce una url válida"),
})

export default function UrlInput() {
  const [result, setResult] = useState<URLValidation | null>(null)
  const showResult = Boolean(result)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { url: "" }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { status, message } = await validateUrl(values.url)
    setResult({ status, message })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-14 text-xl"
                  placeholder="Introduce la URL a validar:"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full font-bold text-2xl" type="submit">Validar</Button>
      </form>
      {showResult && <URLResult result={result as URLValidation} setResult={setResult} />}
    </Form>
  )
}
