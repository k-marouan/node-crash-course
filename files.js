const fs = require('fs');

// reading files ##################################
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data); // <Buffer 68 65 6c 6c 6f 2c 20 6d 61 72 6f 75 61 6e>
//     console.log(data.toString()); // hello, marouan
// });

// console.log('last nine!');

// writing files ##################################
// fs.writeFile('./docs/blog1.txt', 'hello world!', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello again!', () => {
//     console.log('file was created');
// });

// create directories ##############################
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created!');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted!');
//     });
// }

// deleting files
// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file deleted!');
//     });
// }
