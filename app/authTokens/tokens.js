const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MzMzNjMsImNvbXBhbnlOYW1lIjoiVHJhaW5zIENlbnRyYWwiLCJjbGllbnRJRCI6ImFkZWY1NTMyLWFlM2UtNGVhNi05YjA0LTMwYzczZGU3ZWFlOCIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiJSQUAyMDExMDAzMDEwMTM4In0.gm-yJl9tm_guObFElV7Qrb2xWtq9GdJ6ysXaUrjyQv8';
export const options =  {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
}