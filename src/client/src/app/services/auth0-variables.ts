interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'pou33BKWTHraMRKmRoYcXpFm43XPgR0Z',
    domain: 'jospircos.auth0.com',
    callbackURL: 'https://acme-app-front.herokuapp.com'
  };