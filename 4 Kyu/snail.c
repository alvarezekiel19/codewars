#include <stdio.h>
#include <stdlib.h>

int* snail(int** array, int n, int* resultSize) {
    int *fooArray = (int*)malloc(n * n * sizeof(int));  // Allocate memory for the result
    *resultSize = 0; // Initialize result array size

    int top = 0, bottom = n - 1;
    int left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (int i = left; i <= right; i++) {
            fooArray[(*resultSize)++] = array[top][i];
        }
        top++; // Move down to the next row

        // Traverse from top to bottom along the right column
        for (int i = top; i <= bottom; i++) {
            fooArray[(*resultSize)++] = array[i][right];
        }
        right--; // Move left to the next column

        // Traverse from right to left along the bottom row (if there is a bottom row)
        if (top <= bottom) {
            for (int i = right; i >= left; i--) {
                fooArray[(*resultSize)++] = array[bottom][i];
            }
            bottom--; // Move up to the next row
        }

        // Traverse from bottom to top along the left column (if there is a left column)
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                fooArray[(*resultSize)++] = array[i][left];
            }
            left++; // Move right to the next column
        }
    }

    return fooArray; // Return the result array
}

int main() {
    int n = 3;
    int* array[3];
    int row1[] = {1, 2, 3};
    int row2[] = {4, 5, 6};
    int row3[] = {7, 8, 9};
    array[0] = row1;
    array[1] = row2;
    array[2] = row3;

    int resultSize;
    int* result = snail(array, n, &resultSize);

    // Print the result
    for (int i = 0; i < resultSize; i++) {
        printf("%d ", result[i]);
    }
    printf("\n");

    // Free the allocated memory
    free(result);

    return 0;
}

