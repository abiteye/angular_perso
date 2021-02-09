export class User {

    id?: number;
    username: string | undefined;
    password: string | undefined;
    prenom!: string;
    nom: string | undefined;
    email: string | undefined;
    photo: any;
    profil!: string;
    token: string | undefined;
}
