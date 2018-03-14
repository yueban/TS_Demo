onload = () => {
    let isDone: boolean = true;
    log('true', isDone);

    let decNum: number = 7;
    let hexNum: number = 0x11;
    let binaryNum: number = 0b101;
    let octalNum: number = 0o71;
    log('7', decNum);
    log('0x11', hexNum);
    log('0b101', binaryNum);
    log('0o71', octalNum);

    let str1: string = 'str1' + "sss";
    let str2: string = `${str1}`;
    log('str1', str1);
    log('str2', str2);

    let list1: number[] = [1, 2, 3];
    let list2: string[] = ['s1', 's2', 's3'];
    let list3: Array<boolean> = [true, false];
    log('list1', list1);
    log('list2', list2);
    log('list3', list3);

    let tuple1: [string, boolean] = ['s', true];
    log('tuple1', tuple1);
    log('tuple1[2]', tuple1[3]);

    enum Color {
        Red = 1, Green = 4, Blue
    }
    let e: Color = Color.Blue;
    log(' Color.Blue', e);
    log('Color[2]', Color[2]);
    log('Color[4]', Color[4]);

    let notSure1: any = '12345';
    log('notSure1.substr(2, 4)', notSure1.substr(2, 4));;
    //has warning
    // let notSure2: Object = '12345';
    // log('notSure2.substr(2, 4)', notSure2.substr(2, 4));
    let arr: any[] = ['s3', 2, true];
    log('any[]', arr);

    // log('function void', typeof testVoid());
    // let void1: void = null;
    // let void2: void = undefined;
    // log('void1', void1);
    // log('void2', void2);

    let someValue1: any = 'this is a string';
    let someValue2: Object = 'this is a string';
    log('someValue', (<string>someValue1).substr(2, 4));
    log('someValue', (someValue1 as string).substr(2, 4));
    log('someValue', (<string>someValue2).substr(2, 4));
    log('someValue', (someValue2 as string).substr(2, 4));
}

function error(): never {
    throw new Error('test error');
}

function fail(): never {
    return error();
}

function infiniteLoop(): never {
    while (true) { }
}

function testVoid(): void {
}

function log(key, value) {
    let log = document.createElement('p');
    log.innerHTML = key + ': ' + value;
    let logElem = document.getElementById('log');
    if (logElem) {
        logElem.appendChild(log);
    }
}