export class Coin {
  public id: string = '';
  public symbol: string = '';
  public name: string = '';
}

export class CoinDetail {
  public id: string = '';
  public symbol: string = '';
  public name: string = '';
  public genesis_date: string = '';
  public categories: string[] = [];
  public desc: string = '';
  public image: Image = new Image();
  public links: Links = new Links();
}

export class Image {
  public large: string = '';
}

export class Links {
  public homepage: string[] = [];
}
