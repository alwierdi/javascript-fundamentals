/*

    -> Synchronous adalah program dijalankan secara berurutan, program akan menunggu hinga operasi tersebut selesai sebelum melanjutkan ke baris kode berikutnya

    -> Asynchronous adalah program tidak menunggu hingga sebuah operasi selesai sebelum menlanjutkan ke baris kode berikutnya. (I/O operation, network request, fetching data) handled with: Callbacks, Promises, Async Await

*/

function func1(Callbacks) {
    setTimeout(() => {
        console.log("object1");
        Callbacks();
    }, 3000);
}

function func2() {
    console.log("object2");
    console.log("object3");
    console.log("object4");
}

func1(func2);