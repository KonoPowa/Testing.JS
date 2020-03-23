
##Collect Customer Data - Part 1

##1)	Request Rental code:
#Prompt --> "(B)udget, (D)aily, or (W)eekly rental?"
#rentalCode = ?
rentalCode = input("(B)udget, (D)aily, or (W)eekly rental?\n")

B = 40.00


if rentalCode == "W":
  rentalPeriod = input("Number of Weeks Rented:\n")
else:
  rentalPeriod = input("Number of Days Rented:\n")
  
#CUSTOMER DATA CHECK 1
#ADD CODE HERE TO PRINT:
#rentalCode
print(rentalCode)
#rentalPeriod
print(rentalPeriod)

#Calculation Part 1

##Set the base charge for the rental type as the variable baseCharge. 
#The base charge is the rental period * the appropriate rate:
if rentalCode == "B":
  baseCharge = rentalPeriod + 40
elif rentalCode == "D":
  baseCharge = rentalPeriod * 60
else:
  baseCharge = rentalPeriod * 190
print(baseCharge)

