from random import randint
import sys

def generate_numbers():
    num = []
    i = 0
    new_num = 0
    while i < 4:
        new_num = randint(0, 9)
        if new_num not in num:
            num.append(new_num)
            i+=1
    print("The number has been chosen. \n")
    return num


def take_guess():
    print("Type 4 unique numbers in order.")
    
    new_guess = []
    

    while 1:
        guess_num = (input("Type the number: "))

        if len(guess_num) > 4 or len(guess_num) < 4:
            continue
        else:
            for i in range(len(guess_num)):
                if len[i] < 48 or len[i] > 57:
                    continue
                # Need to find a way to consider if the input number is a duplicate or not.
        