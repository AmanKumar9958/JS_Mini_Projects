#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main(){
    int randomNumber,guessNumber, attempts = 0;
    // Generating the random number..
    srand(time(0));
    randomNumber = rand()%100+1; //generate the number between 1 to 100..
    // printf("The number is %d", randomNumber);

    // Actual Game..
    do
    {
        printf("Enter the number to guess - ");
        scanf("%d", &guessNumber);

        if(guessNumber>randomNumber){
            printf("Your number is too high\n");
        }
        else if(guessNumber<randomNumber){
            printf("Your number is too low\n");
        }
        else{
            printf("You guessed it RIGHT in %d attempts", attempts);
        }
        attempts++;
    } while (guessNumber!=randomNumber);
    getch();
    return 0;
}