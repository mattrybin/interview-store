import ky from "ky"

export const api = ky.create({
  prefixUrl: "https://fakestoreapi.com",
  timeout: 10000, // 10 seconds
  retry: 3
})
