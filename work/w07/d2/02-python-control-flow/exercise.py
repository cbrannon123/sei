# Branching & Looping Exercises
color = None
while color != 'quit':
    color = input('Enter "green", "yellow", "red": ').lower()

    print(f'The user entered {color}')
    # Write the if...elif...else statement as described in the lesson

    if color == 'green':
        print('go!')
    elif color == 'yellow':
        print('slow')
    elif color == 'red':
        print('slow')
    else:
        print('nope')