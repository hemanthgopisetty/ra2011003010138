const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTQzNDIsImNvbXBhbnlOYW1lIjoiVHJhaW5zIENlbnRyYWwiLCJjbGllbnRJRCI6ImFkZWY1NTMyLWFlM2UtNGVhNi05YjA0LTMwYzczZGU3ZWFlOCIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiJSQUAyMDExMDAzMDEwMTM4In0.DlL1K_wSvB5CnKGOA06h06qJRbZtx6o5JRNxWXcHawU';
export const options =  {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
}