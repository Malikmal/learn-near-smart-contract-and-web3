import { 
  NearBindgen,
  // NearContract,
  initialize,
  near,
  call,
  view,
  // UnorderedMap
} from 'near-sdk-js';

@NearBindgen({ requireInit: true })
class HelloNear { // extends NearContract{
  greeting: string = "Hello";
  // wordMap: UnorderedMap<string>;
  // randomNumber: number = 0;

  // constructor({random_number = 0}){
    // super();
    // this.wordMap = new UnorderedMap("wM");
    // this.randomNumber = Math.floor(Math.random() * 3);

    // for(let i = 0; i < 3; i++){
    //   this.wordMap.set(("" + i), "one");
    // }

    // for(let i = 0; i < 10; i++){
    //   near.storageWrite(("word_" + i), ("word at " + i));
    // }
    // near.storageWrite("word_1", "word at 1");
    // this.greeting = "wwkwkwkkw from constructor";
  // }
  
  @initialize({ privateFunction: true })
  init() {
    // this.beneficiary = beneficiary
    this.greeting = "wwkwkwkkw";
    near.storageWrite("word_1", "word at 1");
  }


  // words: string[] = [
  //   "one",
  //   "two",
  //   "three",
  //   "four",
  //   "five",
  //   "six",
  //   "sever",
  //   "eight",
  //   "nine",
  //   "ten",
  // ];
  // randomNumber: number = 0;
  // wordMap : UnorderedMap<string>;

  // constructor(){
  //   this.wordMap = new UnorderedMap("wm");
  //   for(let i = 0; i < 3; i++){
  //     this.wordMap.set(("" + i), "one");
  //   }
  //   // this.wordMap.set(, "one");
  // }

  // @view({})
  // get_random_word():string{
  //   // near.log(JSON.stringify(this.words));
  //   // console.log(JSON.stringify(this.words));
  //   // this.randomNumber = Math.floor(Math.random() * 3);

  //   // return this.words[0];
  //   // return JSON.stringify(this.words[this.randomNumber]);
  //   // return JSON.stringify(this.words.length);
  //   // return JSON.stringify(this.wordMap.get("one"));
  //   return JSON.stringify(this.wordMap.get("" + this.randomNumber));
  // }

  @call({})
  clean({ keys }) {
    keys.forEach((key) => near.storageRemove(key));
  }

  @call({})
  put({ key, value }) {
    near.storageWrite(key, value);
  }

  @view({})
  get({ key }) {
    return near.storageRead(key);
  } 

  @view({}) // This method is read-only and can be called for free
  get_greeting(): string {
    return this.greeting;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ greeting }: { greeting: string }): void {
    // Record a log permanently to the blockchain!
    near.log(`Saving greeting ${greeting}`);
    this.greeting = greeting;
  }
}