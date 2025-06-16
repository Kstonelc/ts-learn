// 抽象类 不能实例化 可以被继承 可以有普通方法 可以有抽象方法
/* 何时使用抽象类
 * 1 定义通用接口
 * 2 提供基础实现
 * 3 确保关键实现
 * 4 共享代码和逻辑
 * */

abstract class Package {
  //  构造方法
  constructor(public weight: number) {}
  // 抽象方法
  abstract calculate(): number;
  // 具体方法
  printPackage(): void {
    console.log(`包裹重 ${this.weight} kg. 运费为 ${this.calculate()}元`);
  }
}

class StandardPackage extends Package {
  // 构造方法
  constructor(
    weight: number,
    public unitPrice: number,
  ) {
    super(weight);
  }
  // 实现抽象方法
  calculate(): number {
    return this.weight * this.unitPrice;
  }
}

class ExpressPackage extends Package {
  // 构造方法
  constructor(
    weight: number,
    public unitPrice: number,
    public expressFee: number,
  ) {
    super(weight);
  }
  // 实现抽象方法
  calculate(): number {
    return this.weight * this.unitPrice + this.expressFee;
  }
}

const s2 = new StandardPackage(1, 5);
s2.printPackage();

const e2 = new ExpressPackage(1, 5, 10);

e2.printPackage();
