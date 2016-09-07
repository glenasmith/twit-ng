export class Tweet {


    public avatar;

    constructor(public id : number, public body: string, public author: string, public date: Date, public retweets: Array<string>, public favorites: Array<string>) {
        this.avatar = `${author.toLowerCase()}.jpg`;
    }

    hasFavorited(userId : string) : boolean {
        return this.favorites.indexOf(userId) != -1;
    }

    hasRetweeted(userId : string) : boolean {
        return this.retweets.indexOf(userId) != -1;
    }


}
