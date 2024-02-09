export class FaceSnap {
    title!: string;
    description!: string;
    createDate!: Date;
    snaps!: number;
    imageUrl! : string;
    location? : string;

    //En utilisant la syntaxe "public title : string" dans le constructor on créé et on initialise la propriété title sans déclarer de variable
    //Mais on décide de se passer du constructor pour cette classe
    // constructor(public title: string, public description : string, public snaps : number, public createDate : Date, public imageUrl : string, public location? : string) {
    //     // this.title = title;
    //     // this.description = description;
    //     // this.createDate = createDate;
    //     // this.imageUrl =imageUrl;
    //     // this.snaps = snaps;
    // }
}