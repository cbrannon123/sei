# exercise-06 What's the  Season?

# Write the code that:
# 1. Prompts the user to enter the month (as three characters):
#      Enter the month of the season (Jan - Dec):
# 2. Then propts the user to enter the day of the month: 
#      Enter the day of the month:
# 3. Calculate what season it is based upon this chart:
#      Dec 21 - Mar 19: Winter
#      Mar 20 - Jun 20: Spring
#      Jun 21 - Sep 21: Summer
#      Sep 22 - Dec 20: Fall
# 4. Print the result as follows:
#      <Mmm> <dd> is in <season> 

# Hints:
# Consider using the in operator to check if a string is in a particular list/tuple like this:
# if input_month in ('Jan', 'Feb', 'Mar'):
#
# After setting the likely season, you can use another if...elif...else statement to "adjust" if
# the day number falls within a certain range.
month = input('Enter the month of the season (Jan - Dec): ')
day = input('Enter the day of the month: ')
if month in ('Dec', 'Jan', 'Feb', 'Mar'):
    season = 'Winter'
elif month in ('Mar', 'Apr', 'May', 'Jun'):
    season = 'Spring'
elif month in ('Jun', 'Jul', 'Aug', 'Sep'):
    season = 'Summer'
else:
    season = 'Fall'
if month == 'Mar' and day > str(19):
    season = 'Spring'
elif month == 'Jun' and day > str(20):
    season = 'Summer' 
elif month == 'Sep' and day > str(21):
    season = 'Fall'
else:
    season = 'Winter'
print(f'{month} {day} is in {season}')