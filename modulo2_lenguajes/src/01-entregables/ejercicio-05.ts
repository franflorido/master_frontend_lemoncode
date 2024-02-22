console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {
  NumMonedas: number;

  constructor() {
    this.NumMonedas = 0;
  }

  private ruleta(): Array<boolean> {
    return [Math.random() < 0.5, Math.random() < 0.5, Math.random() < 0.5];
  }

  private checker(arr: Array<boolean>): boolean {
    return arr.every(Boolean);
  }

  public play(): void {
    this.NumMonedas++;

    if (this.checker(this.ruleta())) {
      console.log(`Congratulations!!!. You won ${this.NumMonedas} coins!!`);
      this.NumMonedas = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const maquina_1 = new SlothMachine();

maquina_1.play();
maquina_1.play();
maquina_1.play();
maquina_1.play();
maquina_1.play();
maquina_1.play();
maquina_1.play();
maquina_1.play();
maquina_1.play();
