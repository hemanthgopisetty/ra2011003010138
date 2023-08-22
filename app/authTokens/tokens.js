const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTY5NDcsImNvbXBhbnlOYW1lIjoiVHJhaW5zIENlbnRyYWwiLCJjbGllbnRJRCI6ImFkZWY1NTMyLWFlM2UtNGVhNi05YjA0LTMwYzczZGU3ZWFlOCIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiJSQUAyMDExMDAzMDEwMTM4In0.FKT-I8s9TIJAiG3WLrB125Y-c-BFWumPrMLPsHmZYbA';
export const options =  {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
}