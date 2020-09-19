import AddMethod from "./modules/addMethod";
import MultiplyMethod from "./modules/multiplyMethod";



    let add = new AddMethod();
    let multiply = new MultiplyMethod();

    let i=100;
    do {

        if(add.addNumber(i)>300){
            break;
        }
        i=add.addNumber(i);

        if(multiply.multiplyNumber(i)>300){
            add.addNumber(i);
        }else{
            i=multiply.multiplyNumber(i);

        }


    } while (i < 300);
    add.printIt(i);



