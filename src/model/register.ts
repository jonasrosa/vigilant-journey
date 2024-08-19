export type Geo={
  lat: string,
  lng: string
}

export type Addess={
  street: string,
  suite: string,
  city: string,
  zipcode:string,
  geo:Geo
}

export type Company ={
  name:string,
  catchPhrase:string,
  bs:string
}

export type Register = {
  id: number,
  name:string,
  username: string,
  email: string,
  address:Addess,
  phone: string,
  website: string,
  company:Company
}
