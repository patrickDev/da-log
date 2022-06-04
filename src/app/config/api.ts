import { environment  } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://api.satepi.com' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'