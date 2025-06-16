function RangeValidate(min: number, max: number) {
  return function (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    /*
     * 1 实例: 类的原型对象 2 静态: 类本身
     * */
    const oldSetter = descriptor.set;
    descriptor.set = function (value: number) {
      if (value < min || value > max) {
        throw new Error(`${propertyKey}的参数${value}不在${min}~${max}之间`);
      }
      if (oldSetter) {
        oldSetter.call(this, value);
      }
    };
  };
}

class Weather {
  private _temp: number;
  constructor(_temp: number) {
    this._temp = _temp;
  }
  @RangeValidate(-50, 50) // 进行参数范围验证
  set temp(value: number) {
    this._temp = value;
  }
  get temp(): number {
    return this._temp;
  }
}

let weather = new Weather(10);
weather.temp = 120;
