import {sum} from '../index.js'
import {definePrime} from '../index.js'
import {revertString} from '../index.js'


xdescribe("test sum", 
()=>{
    it("test sum1", 
       ()=>{
        expect(sum(1, 2)).toBe(3);
       }
    ),
    it("test sum1", 
       ()=>{
        expect(sum(5, 100)).toBe(105);
       }
    );
}
);

xdescribe("tests for definePrime function", 
    () => {
        const simple = 17;
        const complex = 18;
    
        it("should operate correctly with simple, complex and invalid number", 
        () => {
            expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
            expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
            expect(definePrime(1001)).toBe("Данные неверны");
        }
        );
    }
  );

  describe("tests for revertString function", () => {
    it("should reverse string", 
    () =>{ 
        expect(revertString("abc")).toBe("cba");
        expect(revertString(123)).toBe("not string");
    }
    );
    }
  );