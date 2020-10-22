function adjacentProduct(inputArr: number[]): number {
    //establish a baseline for comparison
    let largestProduct = inputArr[0] * inputArr[1];

    //loop through array

    for (let i = 1; i < inputArr.length - 1; i++) {
        //create a new product and multiply the indexes next to each other and store
        let product = inputArr[i] * inputArr[i + 1];
        console.log(product);

        //compare the baseline against product
        largestProduct = largestProduct  < product ? product: largestProduct;
    }
 
    return largestProduct;

}

console.log(adjacentProduct([2, 5, 2, 7]));