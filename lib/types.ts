export type URLValidation = {
  status: "valid" | "warning" | "danger"
  message: {
    title: string
    description: string
  }
}
