var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m.");
    };
    return Animal;
}());
/**
 * 使用 extends 关键字创建了 Animal (基类) 的两个子类：Horse 和 Snake （派生类）
 * 这两个派生类各自包含一个 构造函数，它必须调用 super() , 它会执行 基类 的构造函数
 * 而且在 构造函数 里访问 this 的属性之前，一定要 调用 super(). 这是 TS 强制执行的一条重要规则
 * */
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this; // 必须调用super() 否则会报错：派生类的构造函数必须包含 "super" 调用。
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var House = /** @class */ (function (_super) {
    __extends(House, _super);
    function House(name) {
        return _super.call(this, name) || this;
    }
    // 重写了从 Animal 继承来的 move 方法，使得 move 方法根据不同的类而具有不同的功能
    House.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distance);
    };
    return House;
}(Animal));
var sam = new Snake('Sammy');
// 即使 tom 被声明为 Animal 类型，但因为它的值是 Horse，调用 tom.move(34) 时，它会调用 Horse 里重写的方法。
var tom = new House('Tommy');
sam.move();
tom.move(34);
